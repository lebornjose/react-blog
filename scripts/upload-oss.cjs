#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * 解析 .env 文件，返回环境变量对象
 * 不支持变量展开，只处理 KEY=VALUE 格式
 * 值中的首尾单引号或双引号会被去除
 */
function loadEnv(filePath) {
  const env = {};
  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');
    for (const line of lines) {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) continue;
      const eqIndex = trimmed.indexOf('=');
      if (eqIndex === -1) continue;
      const key = trimmed.slice(0, eqIndex).trim();
      let value = trimmed.slice(eqIndex + 1).trim();
      // 去掉首尾的单引号或双引号
      if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      env[key] = value;
    }
  }
  return env;
}

const envPath = path.join(__dirname, '..', '.env');
const envFromFile = loadEnv(envPath);

/**
 * 从环境变量或 .env 文件获取配置，优先使用当前运行环境变量
 */
function getConfig(key) {
  return process.env[key] || envFromFile[key];
}

const requiredKeys = ['OSS_REGION', 'OSS_ACCESS_KEY_ID', 'OSS_ACCESS_KEY_SECRET', 'OSS_BUCKET'];
const missingKeys = requiredKeys.filter(key => !getConfig(key));
if (missingKeys.length > 0) {
  console.error('错误: 缺少以下环境变量:', missingKeys.join(', '));
  console.error('请在 .env 文件中设置它们或通过环境变量提供');
  process.exit(1);
}

const dryRun = process.argv.includes('--dry-run');

const buildDir = path.join(__dirname, '..', 'build');
if (!fs.existsSync(buildDir)) {
  console.error('错误: build 目录不存在:', buildDir);
  process.exit(1);
}

/**
 * 递归获取 build 目录下的所有文件
 * 跳过 .DS_Store 和以点开头的隐藏文件/目录
 * @param {string} dir - 当前目录
 * @param {string} relativePath - 相对于 build 的路径
 * @returns {Array<{fullPath: string, relPath: string}>}
 */
function getAllFiles(dir, relativePath = '') {
  let files = [];
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    // 跳过以点开头的隐藏条目（如 .DS_Store, .gitkeep, .cache）
    if (entry.name.startsWith('.')) continue;
    const fullPath = path.join(dir, entry.name);
    const relPath = relativePath ? path.join(relativePath, entry.name) : entry.name;
    if (entry.isFile()) {
      files.push({ fullPath, relPath: relPath.replace(/\\/g, '/') });
    } else if (entry.isDirectory()) {
      files = files.concat(getAllFiles(fullPath, relPath));
    }
  }
  return files;
}

const files = getAllFiles(buildDir);

if (files.length === 0) {
  console.log('build 目录为空，没有文件需要上传。');
  process.exit(0);
}

console.log('找到', files.length, '个文件待处理。');

if (dryRun) {
  console.log('=== Dry Run: 将上传以下文件 ===');
  files.forEach(f => console.log(f.relPath));
  console.log('总计:', files.length, '个文件');
  process.exit(0);
}

// 初始化 OSS 客户端
const OSS = require('ali-oss');
const client = new OSS({
  region: getConfig('OSS_REGION'),
  accessKeyId: getConfig('OSS_ACCESS_KEY_ID'),
  accessKeySecret: getConfig('OSS_ACCESS_KEY_SECRET'),
  bucket: getConfig('OSS_BUCKET'),
});

let successCount = 0;
let failCount = 0;
let totalBytes = 0;

/**
 * 上传单个文件到 OSS
 * @param {{fullPath: string, relPath: string}} file
 */
async function uploadFile(file) {
  try {
    const fileStat = fs.statSync(file.fullPath);
    totalBytes += fileStat.size;
    const result = await client.put(file.relPath, file.fullPath);
    if (result.res.status === 200) {
      successCount++;
      process.stdout.write(`\r上传进度: ${successCount + failCount}/${files.length}`);
    } else {
      failCount++;
      console.error(`\n上传失败: ${file.relPath} (状态码: ${result.res.status})`);
    }
  } catch (err) {
    failCount++;
    console.error(`\n上传失败: ${file.relPath} - ${err.message}`);
  }
}

(async () => {
  console.log('开始上传至 OSS bucket:', getConfig('OSS_BUCKET'));
  for (const file of files) {
    await uploadFile(file);
  }
  console.log(); // 换行
  console.log('上传完成。成功:', successCount, ', 失败:', failCount, ', 总大小:', (totalBytes / 1024 / 1024).toFixed(2), 'MB');
  if (failCount > 0) {
    process.exit(1);
  }
})();
