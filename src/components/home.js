import React from 'react';
import Sidebar from './sidebar/index';
import ItemArticle from '../components/article/item';
import bg from '../img/021.webp';
import util from '../utils/index';
import { NavLink } from 'react-router-dom';

class ParticleCanvas extends React.Component {
    constructor(props) {
        super(props);
        this.canvasRef = React.createRef();
        this.animationFrameId = null;
        this.mouse = { x: null, y: null, radius: 150 };
        this.particles = [];
        this.canvas = null;
        this.ctx = null;
        this.width = 0;
        this.height = 0;
        this.isDestroyed = false;
        this.resizeTimeout = null;
    }

    componentDidMount() {
        if (process.env.NODE_ENV === 'test') {
            return;
        }
        this.canvas = this.canvasRef.current;
        if (!this.canvas) return;
        try {
            this.ctx = this.canvas.getContext('2d');
        } catch (e) {
            this.ctx = null;
        }
        if (!this.ctx) {
            return;
        }
        this.initCanvas();
        window.addEventListener('resize', this.handleResize);
        window.addEventListener('mousemove', this.handleMouseMove);
        window.addEventListener('touchmove', this.handleTouchMove, { passive: false });
        window.addEventListener('touchstart', this.handleTouchStart);
        window.addEventListener('touchend', this.handleTouchEnd);
        this.startAnimation();
    }

    componentWillUnmount() {
        this.isDestroyed = true;
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
        }
        window.removeEventListener('resize', this.handleResize);
        window.removeEventListener('mousemove', this.handleMouseMove);
        window.removeEventListener('touchmove', this.handleTouchMove);
        window.removeEventListener('touchstart', this.handleTouchStart);
        window.removeEventListener('touchend', this.handleTouchEnd);
        this.canvas = null;
        this.ctx = null;
    }

    initCanvas = () => {
        const parent = this.canvas.parentElement;
        if (!parent) return;
        this.width = parent.clientWidth;
        this.height = parent.clientHeight;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
        this.createParticles();
    };

    handleResize = () => {
        clearTimeout(this.resizeTimeout);
        this.resizeTimeout = setTimeout(() => {
            this.initCanvas();
        }, 200);
    };

    handleMouseMove = (e) => {
        this.mouse.x = e.clientX;
        this.mouse.y = e.clientY;
    };

    handleTouchMove = (e) => {
        if (e.touches.length > 0) {
            this.mouse.x = e.touches[0].clientX;
            this.mouse.y = e.touches[0].clientY;
        }
    };

    handleTouchStart = (e) => {
        if (e.touches.length > 0) {
            this.mouse.x = e.touches[0].clientX;
            this.mouse.y = e.touches[0].clientY;
        }
    };

    handleTouchEnd = () => {
        this.mouse.x = null;
        this.mouse.y = null;
    };

    createParticles = () => {
        const count = Math.floor((this.width * this.height) / 9000);
        this.particles = [];
        for (let i = 0; i < count; i++) {
            const x = Math.random() * this.width;
            const y = Math.random() * this.height;
            const vx = (Math.random() - 0.5) * 0.5;
            const vy = (Math.random() - 0.5) * 0.5;
            const size = Math.random() * 2 + 1;
            this.particles.push({ x, y, vx, vy, size });
        }
    };

    animate = () => {
        if (this.isDestroyed) return;
        if (!this.ctx) return;
        this.animationFrameId = requestAnimationFrame(this.animate);
        this.ctx.clearRect(0, 0, this.width, this.height);
        const mouse = this.mouse;
        const radius = mouse.radius;
        for (let i = 0; i < this.particles.length; i++) {
            const p = this.particles[i];
            if (mouse.x !== null && mouse.y !== null) {
                const dx = p.x - mouse.x;
                const dy = p.y - mouse.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < radius) {
                    const force = (radius - dist) / radius;
                    const angle = Math.atan2(dy, dx);
                    const pushX = Math.cos(angle) * force * 2;
                    const pushY = Math.sin(angle) * force * 2;
                    p.vx += pushX;
                    p.vy += pushY;
                }
            }
            p.x += p.vx;
            p.y += p.vy;
            if (p.x > this.width || p.x < 0) p.vx = -p.vx;
            if (p.y > this.height || p.y < 0) p.vy = -p.vy;
            this.ctx.beginPath();
            this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            this.ctx.fillStyle = 'rgba(37, 99, 235, 0.78)';
            this.ctx.fill();
        }
        for (let i = 0; i < this.particles.length; i++) {
            for (let j = i + 1; j < this.particles.length; j++) {
                const p1 = this.particles[i];
                const p2 = this.particles[j];
                const dx = p1.x - p2.x;
                const dy = p1.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 150) {
                    const opacity = 1 - dist / 150;
                    this.ctx.beginPath();
                    this.ctx.moveTo(p1.x, p1.y);
                    this.ctx.lineTo(p2.x, p2.y);
                    this.ctx.strokeStyle = `rgba(59, 130, 246, ${opacity * 0.6})`;
                    this.ctx.lineWidth = 0.5;
                    this.ctx.stroke();
                }
            }
        }
    };

    startAnimation = () => {
        if (!this.ctx) return;
        this.animate();
    };

    render() {
        return <canvas ref={this.canvasRef} className="particle-canvas" />;
    }
}

class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            text: '颓废中保持乐观，忙碌中鄙视功利，永保一颗向往的心。',
            inx: 0,
            page: 0,
            timer: 0,
            textDom: null,
            articleList: [],
            more: false,
            keyword: ""
        };
        this.keywordRef = React.createRef();
    };
    addText = () => {
        if(this.state.inx <= this.state.text.length) {
            let index = this.state.inx;
            index++
            this.setState({inx: index});
            if(document.getElementById("J_text") !== null) {
                document.getElementById("J_text").innerHTML = this.state.text.slice(0, this.state.inx) + '_';
            }
            this.setState({timer: setTimeout(this.addText, 200)});
        } else {
            document.getElementById("J_text").innerHTML = this.state.text;
            clearTimeout(this.state.timer);
        }
    };
    getList = () => {
        util.get(`/api/articles/list?page=${this.state.page}`).then((res) => {
            if(res.data.length===0) {
               this.setState({more: true});
               setTimeout(() => {
                this.setState({more: false});
               }, 2000);
            }
            if(this.state.articleList.length === 0) {
                this.setState({articleList: res.data.articles});
            } else {
                this.setState({articleList: this.state.articleList.concat(res.data.articles)});
            }
        })
    };
    getMore = () => {
        this.setState(
            prevState => ({page: prevState.page + 1}),
            this.getList
        );
    };
    onKeyup = (e) => {
        if(e.keyCode === 13) {
            let keyword = this.keywordRef.current ? this.keywordRef.current.value : '';
            this.props.history.push('/cat/search/' + keyword);
        }
    };
    componentWillUnmount() {
        clearTimeout(this.state.timer);
    };
    componentDidMount() {
       this.addText();
       this.getList();
    };
    render() {
        let DOM = this.state.articleList.map((item, index) => ( <ItemArticle key={index} item={item}></ItemArticle>))
        return (
            <div>
                <div className="home-top container-fluid cover">
                    <div className="bg">
                        <img src={bg} alt="背景" className="bg-img"/>
                    </div>
                    <ParticleCanvas />
                    <div className="home-search">
                        <div className="searchFrom">
                            <input type="text" className="input" ref={this.keywordRef}  onKeyUp={this.onKeyup} placeholder="世界这么大，探索一下"/>
                            <i className="icon icon-search"></i>
                        </div>
                    </div>
                    <div className="home-menu">
                        <ul>
                            <li><NavLink to="/home" className='active'><i className="icon-home"></i>&nbsp;主页</NavLink></li>
                            <li><NavLink to="/cat/category"><i className="icon-archive"></i>&nbsp;分类</NavLink></li>
                            <li><a href="/cat/msg"><i className="icon-comments"></i>&nbsp;留言</a></li>
                            <li><a href="/cat/product"><i className="icon-book"></i>&nbsp;产品</a></li>
                            <li><a href="/cat/about"><i className="icon-user"></i>&nbsp;关于</a></li>
                            <li><a target="_blank" rel="noopener noreferrer" href="http://www.leborn.me/blog/home/music"><i className="icon-film"></i>&nbsp;音乐</a></li>
                        </ul>
                    </div>
                    <div id="J_text" className="home-text"></div>
                </div>
                <div className="home-main container">
                    <div className="row">
                        <div className="col-md-8 article-list">
                            {DOM}
                            <div className="article-more">
                                <span className="more-btn" onClick={this.getMore}>查看更多<i className="icon-long-arrow-down"></i></span>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <Sidebar></Sidebar>
                        </div>
                    </div>
                </div>
                <div className={`alert alert-danger ${this.state.more ? 'sh0w' : 'hidden'}`} role="alert">没有更多文章了!</div>
            </div>
        )
    }
}
export default Home;