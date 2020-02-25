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
                    name: '消愁',
                    artist: '毛不易',
                    url: 'https://m7.music.126.net/20200225200922/1560d6b0cc41dfaca9622a8fa430343e/ymusic/510b/5659/5253/fa20f19cd2a3a06597c6e9cfba8527a4.mp3',
                    cover: 'https://api.i-meto.com/meting/api?server=netease&type=pic&id=109951163350929740&auth=8fdb380dcc17a5128570a1d1c64e2052c0f701df64bc41b345e19207b6cf8244',
                    lrc: 'https://api.i-meto.com/meting/api?server=netease&type=lrc&id=569200213&auth=1ef55c260999579d97795f27ad7783b6e049d0ccbfa7f194abef6a584f561720',
                    theme: '#46718b'
                },
                {
                    name: '像我这样的人',
                    artist: '毛不易',
                    url: 'https://m7.music.126.net/20200225193426/e9e9584a97dcb962f817f4fb0fdcd493/ymusic/5605/07fd/b516/a10d9e248c19d9ac2d40d2b0596fc09b.mp3',
                    cover: 'https://p3.music.126.net/vmCcDvD1H04e9gm97xsCqg==/109951163350929740.jpg?param=300y300',
                    lrc: 'https://api.i-meto.com/meting/api?server=netease&type=lrc&id=569213220&auth=1015aaa9e58b3e29fa2dc8ec1e347cd6f155fae2340c81d09d423a0803da56c1',
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