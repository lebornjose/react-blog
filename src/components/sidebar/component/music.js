import React from 'react';
import { withRouter } from 'react-router-dom';
import 'aplayer/dist/APlayer.min.css';
import APlayer from 'aplayer';

const MUSIC_LIST = [
    {
      name: '我的梦',
      artist: '张靓颖',
      url: 'https://xinblog.oss-cn-qingdao.aliyuncs.com/mp3/%E6%88%91%E7%9A%84%E6%A2%A6.mp3',
      cover: 'https://p3fx.kgimg.com/stdmusic/400/20151126/20151126110742332252.jpg',
      lrc: 'https://xinblog.oss-cn-qingdao.aliyuncs.com/mp3/wodemeng.lrc',
      theme: '#38f'
    },
    {
       name: '七里香',
       artist: '周杰伦',
       url: 'https://xinblog.oss-cn-qingdao.aliyuncs.com/mp3/qilixiang.mp3',
       cover: 'https://p3fx.kgimg.com/stdmusic/400/20150720/20150720211645985155.jpg',
       lrc: 'https://xinblog.oss-cn-qingdao.aliyuncs.com/mp3/qilixiang.lrc',
       theme: '#e6a23c'
    },
    {
        name: '无与伦比的美丽',
        artist: '田馥甄',
        url: 'https://xinblog.oss-cn-qingdao.aliyuncs.com/mp3/2094314672.mp3',
        cover: 'https://p3fx.kgimg.com/stdmusic/400/20170517/20170517113947412108.jpg',
        lrc: 'https://xinblog.oss-cn-qingdao.aliyuncs.com/mp3/wuyulunbi.lrc'
    },
    {
        name: '追梦赤子心',
        artist: 'GALA',
        url: 'https://xinblog.oss-cn-qingdao.aliyuncs.com/mp3/zhuimengchizixin.mp3',
        cover: 'https://p2.music.126.net/XDncptlBJ4_LN3hLBx-8aw==/19061133579343591.jpg?param=130y130',
        lrc: 'https://xinblog.oss-cn-qingdao.aliyuncs.com/mp3/zhuimengchizixin.lrc',
        theme: '#f00'
    },
    {
      name: "雅俗共赏",
      artist: "许嵩",
      url: 'https://xinblog.oss-cn-qingdao.aliyuncs.com/mp3/%E8%AE%B8%E5%B5%A9%20-%20%E9%9B%85%E4%BF%97%E5%85%B1%E8%B5%8F.mp3',
      cover: 'https://p1.music.126.net/Wcs2dbukFx3TUWkRuxVCpw==/3431575794705764.jpg?param=130y130',
      lrc: 'https://xinblog.oss-cn-qingdao.aliyuncs.com/mp3/yasugongshang.lrc',
      theme: '#f56c6c'
    },
    {
        name: '惊鸿一面',
        artist: "许嵩 黄龄",
        url: 'https://xinblog.oss-cn-qingdao.aliyuncs.com/mp3/%E8%AE%B8%E5%B5%A9%20%E9%BB%84%E9%BE%84%20-%20%E6%83%8A%E9%B8%BF%E4%B8%80%E9%9D%A2.mp3',
        cover: 'https://p1.music.126.net/WoR2LbM1IFauFpvhBWOjqA==/6642149743396577.jpg?param=130y130',
        lrc: 'https://xinblog.oss-cn-qingdao.aliyuncs.com/mp3/jinghongyimian.lrc',
        theme: '#f00'
    },
    {
        name: '红色石头',
        artist: '李智楠',
        url: 'https://xinblog.oss-cn-qingdao.aliyuncs.com/mp3/%E6%9D%8E%E6%99%BA%E6%A5%A0%20-%20%E7%BA%A2%E8%89%B2%E7%9F%B3%E5%A4%B4.mp3',
        cover: 'https://p1.music.126.net/N9c_WbO3hpxzrPZCfGOPWQ==/37383395361172.jpg?param=130y130',
        lrc: 'https://xinblog.oss-cn-qingdao.aliyuncs.com/mp3/hongseshitou.lrc',
        theme: '#46718b'
    },
    {
        name: '月牙湾',
        artist: 'F.I.R.',
        url: 'https://xinblog.oss-cn-qingdao.aliyuncs.com/mp3/yueyawan.mp3',
        cover: 'https://p2.music.126.net/Gzty3RTKN6Vf96IcjYC3lw==/109951164219313436.jpg?param=130y130',
        lrc: 'https://xinblog.oss-cn-qingdao.aliyuncs.com/mp3/yueyawan.lrc',
        theme: '#38f'
    },
    {
        name: '屋顶',
        artist: '周杰伦 / 温岚',
        url: 'https://xinblog.oss-cn-qingdao.aliyuncs.com/mp3/wuding.mp3',
        cover: 'https://p1.music.126.net/NYcGC00Hm38sh83ZkXZyRQ==/91259465122701.jpg?param=130y130',
        lrc: 'https://xinblog.oss-cn-qingdao.aliyuncs.com/mp3/wuding.lrc',
        theme: '#38f'
    },
    {
        name: 'five hundred miles',
        artist: 'Justin',
        url: 'https://xinblog.oss-cn-qingdao.aliyuncs.com/mp3/4141660308.mp3',
        cover: 'https://p3fx.kgimg.com/stdmusic/400/20131009/20131009143610650448.jpg',
        lrc: 'https://xinblog.oss-cn-qingdao.aliyuncs.com/mp3/Five%20Hundred%20Miles',
        theme: '#46718b'
    }
];

export const MusicSlot = () => (
    <div className="sidebar-music sidebar-block">
        <h3 className="title"><i className="icon-music"></i>最近在听</h3>
        <div className="content music-sidebar-slot" data-music-slot="sidebar"></div>
    </div>
);

class Music extends React.Component{
    constructor(props) {
        super(props);
        this.playerRef = React.createRef();
        this.floatRef = React.createRef();
        this.hiddenRef = React.createRef();
        this.player = null;
        this.destroyed = false;
        this.state = {
            isPlaying: false,
            isFloating: false
        };
    }
    patchPlayer = (player) => {
        if (!player || !player.list || !player.list.switch) {
            return;
        }

        const originalSwitch = player.list.switch.bind(player.list);
        player.list.switch = (index) => {
            const container = player.container;
            const listItems = container ? container.querySelectorAll('.aplayer-list li') : [];

            if (this.destroyed || !container || !container.isConnected || !listItems[index]) {
                return;
            }

            originalSwitch(index);
        };
    };
    patchPlayState = (player) => {
        if (!player || !player.play || !player.pause) {
            return;
        }

        const originalPlay = player.play.bind(player);
        const originalPause = player.pause.bind(player);

        player.play = () => {
            if (!this.destroyed) {
                this.setState({isPlaying: true});
            }
            return originalPlay();
        };

        player.pause = () => {
            if (!this.destroyed) {
                this.setState({isPlaying: false});
            }
            return originalPause();
        };
    };
    handlePlayerClick = (event) => {
        if (!this.playerRef.current) {
            return;
        }

        const playerNode = this.playerRef.current.querySelector('.aplayer');
        if (!playerNode || !playerNode.contains(event.target)) {
            return;
        }

        const button = this.playerRef.current.querySelector('.aplayer-button');
        const isPlayControl = event.target.closest('.aplayer-pic, .aplayer-icon-play');

        if (!button || !isPlayControl) {
            return;
        }

        if (button.classList.contains('aplayer-play')) {
            this.setState({isPlaying: true});
        }

        if (button.classList.contains('aplayer-pause')) {
            this.setState({isPlaying: false});
        }
    };
    componentDidMount() {
        const container = this.playerRef.current;
        if (!container) {
            return;
        }

        this.destroyed = false;
        this.player = new APlayer({
            container,
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
            audio: MUSIC_LIST
        });
        this.patchPlayer(this.player);
        this.patchPlayState(this.player);
        if (this.player.on) {
            this.player.on('play', () => this.setState({isPlaying: true}));
        }
        document.addEventListener('click', this.handlePlayerClick, true);
        this.updatePlacement();
    }
    componentDidUpdate(prevProps, prevState) {
        if (
            prevProps.location.pathname !== this.props.location.pathname ||
            prevState.isPlaying !== this.state.isPlaying
        ) {
            this.updatePlacement();
        }
    }
    getSlot = () => document.querySelector('[data-music-slot="sidebar"]');
    isHome = () => {
        const path = this.props.location.pathname;
        return path === '/' || path === '/home';
    };
    updatePlacement = () => {
        if (!this.player || !this.playerRef.current) {
            return;
        }

        const slot = this.getSlot();
        const shouldFloat = !slot;
        const target = shouldFloat ? this.floatRef.current : slot;

        if (target && this.playerRef.current.parentNode !== target) {
            target.appendChild(this.playerRef.current);
        }

        if (this.player.setMode) {
            this.player.setMode(shouldFloat ? 'mini' : 'normal');
        }

        if (this.state.isFloating !== shouldFloat) {
            this.setState({isFloating: shouldFloat});
        }
    };
    componentWillUnmount() {
        this.destroyed = true;

        if (this.player) {
            try {
                document.removeEventListener('click', this.handlePlayerClick, true);
                if (this.player.timer && this.player.timer.destroy) {
                    this.player.timer.destroy();
                }
                if (this.player.audio) {
                    this.player.audio.pause();
                    this.player.audio.src = '';
                }
                if (this.player.destroy) {
                    this.player.destroy();
                }
            } catch (error) {
                // APlayer can still touch cleared DOM during route changes; cleanup should stay quiet.
            }
        }
        this.player = null;

        if (this.playerRef.current) {
            this.playerRef.current.innerHTML = '';
        }
    }
    render() {
        const isFloating = this.state.isFloating;

        return (
            <div>
                <div className="music-hidden-host" ref={this.hiddenRef}>
                    <div ref={this.playerRef}></div>
                </div>
                <div className={`music-floating-player ${isFloating ? 'show' : 'hidden'}`} ref={this.floatRef}></div>
            </div>
        )
    }
}

export default withRouter(Music)
