# react-blog

一个基于 Create React App 构建的个人博客前端项目，包含首页、文章列表、文章详情、分类、搜索、留言、产品展示、关于我等页面。项目使用 React 16、React Router、Sass、Axios，并集成 Gitalk 评论系统和 APlayer 音乐播放器。

线上博客：<http://blog.gmppro.top>

## 项目概览

- 前端框架：React 16 + Create React App
- 路由方案：React Router DOM 5
- 样式方案：Sass / SCSS
- 数据请求：Axios，开发环境通过 CRA `proxy` 转发到后端
- 评论系统：Gitalk
- 音乐播放器：APlayer
- 静态服务：根目录 `app.js` 可用于托管 `build` 产物
- 实验目录：`gateway/` 下是一个独立的 Express AI Gateway 示例

## 功能模块

- 首页文章展示
- 文章分类与文章列表
- 文章详情页
- 关键词搜索
- 留言页与文章评论
- 产品 / 作品展示
- 关于我页面
- 侧边栏导航与音乐播放器
- 返回顶部交互

## 目录结构

```text
.
├── app.js                 # Express 静态服务，用于部署 build 目录
├── build/                 # 前端构建产物
├── gateway/               # 独立 Express AI Gateway 示例
├── public/                # CRA 静态资源目录
├── src/
│   ├── App.js             # 应用入口路由
│   ├── index.js           # React 挂载入口
│   ├── assets/css/        # 全局 SCSS 与字体资源
│   ├── components/        # 页面与业务组件
│   │   ├── article/       # 文章列表项
│   │   ├── mods/          # 头部、底部等公共模块
│   │   ├── product/       # 产品展示组件
│   │   └── sidebar/       # 侧边栏相关组件
│   ├── img/               # 图片资源
│   └── utils/             # 请求、格式化、JSONP 等工具
├── package.json
└── README.md
```

## 路由说明

| 路径 | 页面 |
| --- | --- |
| `/`、`/home` | 首页 |
| `/cat/category` | 分类 / 文章列表 |
| `/cat/msg` | 留言页 |
| `/cat/about` | 关于我 |
| `/cat/product` | 产品展示 |
| `/cat/detail/:id` | 文章详情 |
| `/cat/search/:keyword` | 搜索结果 |

## 接口说明

开发环境的请求会通过 `package.json` 中的 `proxy` 转发到后端服务。

| 功能 | 接口 |
| --- | --- |
| 产品列表 | `/blog/home/jsonProduct` |
| 文章列表 | `/blog/home/jsonList` |
| 文章分类 | `/blog/home/jsonCategory` |
| 关于我 | `/blog/home/jsonAbout` |
| 文章详情 | `/blog/home/jsonDetail/:id` |
| 搜索 | `/blog/home/jsonSearch/:keyword` |

## 本地开发

### 环境要求

- Node.js
- npm 或 Yarn

项目基于较早版本的 `react-scripts@3.4.0`，脚本中已设置 `NODE_OPTIONS=--openssl-legacy-provider`，用于兼容较新的 Node.js OpenSSL 行为。

### 安装依赖

```bash
npm install
```

或：

```bash
yarn install
```

### 启动开发服务

```bash
npm start
```

或：

```bash
yarn start
```

默认会启动 CRA 开发服务，通常访问：

```text
http://localhost:3000
```

### 运行测试

```bash
npm test
```

或：

```bash
yarn test
```

### 构建生产包

```bash
npm run build
```

或：

```bash
yarn build
```

当前构建脚本会设置：

```text
PUBLIC_URL=https://xinblog.oss-cn-qingdao.aliyuncs.com/
```

因此产物中的静态资源路径会指向该 OSS 地址。如果需要部署到其他域名或子路径，请同步调整 `package.json` 中的 `build` 脚本和 `homepage` 字段。

## 部署说明

构建完成后会生成 `build/` 目录，可以上传到静态资源服务，也可以使用根目录的 Express 服务托管：

```bash
npm run build
node app.js
```

服务默认监听 `4000` 端口，可通过 `PORT` 环境变量覆盖：

```bash
PORT=8080 node app.js
```

`app.js` 会将所有路由回退到 `build/index.html`，适配 React Router 的前端路由。

## gateway 目录

`gateway/` 是一个独立的 Express 示例服务，不属于博客前端主流程。它提供 `POST /ai/run` 接口，流程包括：

1. `planner.js` 生成任务计划
2. `guard.js` 做简单关键词拦截
3. `executor.js` 执行写文件示例

运行方式：

```bash
cd gateway
npm install
node server.js
```

服务默认监听：

```text
http://localhost:4000
```

注意：`gateway/executor.js` 当前写入路径为 `../frontend/src/generated.ts`，该目录在当前项目中并不存在，运行前需要根据实际目录结构调整。

## 相关技术

- [React](https://react.dev/)
- [Create React App](https://create-react-app.dev/)
- [React Router](https://reactrouter.com/)
- [Axios](https://axios-http.com/)
- [Sass](https://sass-lang.com/)
- [Gitalk](https://github.com/gitalk/gitalk)
- [APlayer](https://aplayer.js.org/)
- [Express](https://expressjs.com/)
