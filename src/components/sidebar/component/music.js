import React from 'react';
import 'aplayer/dist/APlayer.min.css';
import APlayer from 'aplayer';

class Music extends React.Component{
    //方法会在组件已经被渲染到 DOM 中后运行
    componentDidMount() {
        const ap = new APlayer({
            container: document.getElementById('J_music'),
            mini: false,
            autoplay: false,
            theme: '#FADFA3',
            loop: 'all',
            order: 'random',
            preload: 'auto',
            volume: 0.7,
            mutex: true,
            listFolded: false,
            listMaxHeight: 90,
            lrcType: 3,
            audio: [
                {
                  name: '我的梦',
                  artist: '张靓颖',
                  url: 'http://xinblog.oss-cn-qingdao.aliyuncs.com/mp3/%E6%88%91%E7%9A%84%E6%A2%A6.mp3',
                  cover: 'http://p3fx.kgimg.com/stdmusic/400/20151126/20151126110742332252.jpg',
                  lrc: 'http://xinblog.oss-cn-qingdao.aliyuncs.com/mp3/wodemeng.lrc',
                  theme: '#38f'
                },
                {
                   name: '七里香',
                   artist: '周杰伦',
                   url: 'http://xinblog.oss-cn-qingdao.aliyuncs.com/mp3/qilixiang.mp3',
                   cover: 'http://p3fx.kgimg.com/stdmusic/400/20150720/20150720211645985155.jpg',
                   lrc: 'http://xinblog.oss-cn-qingdao.aliyuncs.com/mp3/qilixiang.lrc',
                   theme: '#e6a23c'
                   
                },
                {
                    name: '无与伦比的美丽',
                    artist: '田馥甄',
                    url: 'http://xinblog.oss-cn-qingdao.aliyuncs.com/mp3/2094314672.mp3',
                    cover: 'http://p3fx.kgimg.com/stdmusic/400/20170517/20170517113947412108.jpg',
                    lrc: 'http://xinblog.oss-cn-qingdao.aliyuncs.com/mp3/wuyulunbi.lrc'
                },
                {
                    name: '追梦赤子心',
                    artist: 'GALA',
                    url: 'http://xinblog.oss-cn-qingdao.aliyuncs.com/mp3/zhuimengchizixin.mp3',
                    cover: 'http://p2.music.126.net/XDncptlBJ4_LN3hLBx-8aw==/19061133579343591.jpg?param=130y130',
                    lrc: 'http://xinblog.oss-cn-qingdao.aliyuncs.com/mp3/zhuimengchizixin.lrc',
                    theme: '#f00'
                },
                {
                  name: "雅俗共赏",
                  artist: "许嵩",
                  url: 'http://xinblog.oss-cn-qingdao.aliyuncs.com/mp3/%E8%AE%B8%E5%B5%A9%20-%20%E9%9B%85%E4%BF%97%E5%85%B1%E8%B5%8F.mp3',
                  cover: 'http://p1.music.126.net/Wcs2dbukFx3TUWkRuxVCpw==/3431575794705764.jpg?param=130y130',
                  lrc: 'http://xinblog.oss-cn-qingdao.aliyuncs.com/mp3/yasugongshang.lrc',
                  theme: '#f56c6c'
                },
                {
                    name: '惊鸿一面',
                    artist: "许嵩 黄龄",
                    url: 'http://xinblog.oss-cn-qingdao.aliyuncs.com/mp3/%E8%AE%B8%E5%B5%A9%20%E9%BB%84%E9%BE%84%20-%20%E6%83%8A%E9%B8%BF%E4%B8%80%E9%9D%A2.mp3',
                    cover: 'http://p1.music.126.net/WoR2LbM1IFauFpvhBWOjqA==/6642149743396577.jpg?param=130y130',
                    lrc: 'http://xinblog.oss-cn-qingdao.aliyuncs.com/mp3/jinghongyimian.lrc',
                    theme: '#f00'
                },
                {
                    name: '红色石头',
                    artist: '李智楠',
                    url: 'http://xinblog.oss-cn-qingdao.aliyuncs.com/mp3/%E6%9D%8E%E6%99%BA%E6%A5%A0%20-%20%E7%BA%A2%E8%89%B2%E7%9F%B3%E5%A4%B4.mp3',
                    cover: 'http://p1.music.126.net/N9c_WbO3hpxzrPZCfGOPWQ==/37383395361172.jpg?param=130y130',
                    lrc: 'http://xinblog.oss-cn-qingdao.aliyuncs.com/mp3/hongseshitou.lrc',
                    theme: '#46718b'
                },
                {
                    name: '月牙湾',
                    artist: 'F.I.R.',
                    url: 'http://xinblog.oss-cn-qingdao.aliyuncs.com/mp3/yueyawan.mp3',
                    cover: 'http://p2.music.126.net/Gzty3RTKN6Vf96IcjYC3lw==/109951164219313436.jpg?param=130y130',
                    lrc: 'http://xinblog.oss-cn-qingdao.aliyuncs.com/mp3/yueyawan.lrc',
                    theme: '#38f'
                },
                {
                    name: '屋顶',
                    artist: '周杰伦 / 温岚',
                    url: 'http://xinblog.oss-cn-qingdao.aliyuncs.com/mp3/wuding.mp3',
                    cover: 'http://p1.music.126.net/NYcGC00Hm38sh83ZkXZyRQ==/91259465122701.jpg?param=130y130',
                    lrc: 'http://xinblog.oss-cn-qingdao.aliyuncs.com/mp3/wuding.lrc',
                    theme: '#38f'
                },
                {
                    name: 'five hundred miles',
                    artist: 'Justin',
                    url: 'https://xinblog.oss-cn-qingdao.aliyuncs.com/mp3/4141660308.mp3',
                    cover: 'http://p3fx.kgimg.com/stdmusic/400/20131009/20131009143610650448.jpg',
                    lrc: 'https://xinblog.oss-cn-qingdao.aliyuncs.com/mp3/Five%20Hundred%20Miles',
                    theme: '#46718b'
                }
            ]
        });
    }
    //  清除定时器
    componentWillUnmount() {
    }
    render() {
        return (
            <div className="sidebar-music sidebar-block">
                <h3 className="title"><i className="icon-music"></i>最近在听</h3>
                <div className="content" id="J_music">2112</div>
            </div>
        )
    }
}

export default Music