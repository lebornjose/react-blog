import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import bg from './img/021.webp';
import './assets/css/all.scss';
import Home from './components/home';
import Category from './components/category';
import Msg from './components/msg';
import Product from './components/product';
import About from './components/about';


class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          isTop: false
        };
    }
    componentDidMount() {
        window.onscroll = () => {
            let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
            if (scrollTop > 500) {
                this.setState({isTop: true});
            } else {
                this.setState({isTop: false});
            }
        }
    }
    scrollAnimation(currentY, targetY) {
        // 计算需要移动的距离
        let needScrollTop = targetY - currentY
        let _currentY = currentY
        setTimeout(() => {
        // 一次调用滑动帧数，每次调用会不一样
        const dist = Math.ceil(needScrollTop / 10)
        _currentY += dist
        window.scrollTo(_currentY, currentY)
        // 如果移动幅度小于十个像素，直接移动，否则递归调用，实现动画效果
        if (needScrollTop > 10 || needScrollTop < -10) {
            this.scrollAnimation(_currentY, targetY)
        } else {
            window.scrollTo(_currentY, targetY)
        }
        }, 1)
    } 
    goTop = () => {
        let currentY = document.documentElement.scrollTop || document.body.scrollTop
        this.scrollAnimation(currentY, 0);
    }
    render(){
        return(
            <div>
                <Router>
                    <div className="home-top container-fluid cover">
                        <div className="bg">
                            <img src={bg} alt="背景" className="bg-img"/>
                        </div>
                        <div className="home-search">
                            <div className="searchFrom">
                                <input type="text" className="input" placeholder="世界这么大，探索一下"/>
                                <i className="icon icon-search"></i>
                            </div> 
                        </div>
                        <div className="home-menu">
                            <ul>
                                <li><NavLink to="/home" activeClassName='active'><i className="icon-home"></i>&nbsp;主页</NavLink></li>
                                <li><NavLink to="/cat" activeClassName='active'><i className="icon-book"></i>&nbsp;分类</NavLink></li>
                                <li><NavLink to="/msg" activeClassName='active'><i className="icon-comments"></i>&nbsp;留言</NavLink></li>
                                <li><NavLink to="/product" activeClassName='active'><i className="icon-book"></i>&nbsp;产品</NavLink></li>
                                <li><NavLink to="/about" activeClassName='active'><i className="icon-user"></i>&nbsp;关于</NavLink></li>
                                <li><a target="_blank" rel="noopener noreferrer" href="http://www.leborn.me/blog/home/music"><i className="icon-film"></i>&nbsp;音乐</a></li>
                            </ul>
                        </div>
                    </div>
                    <Route path='/home' component={Home}></Route>
                    <Route path='/cat' component={Category}></Route>
                    <Route path='/msg' component={Msg}></Route>
                    <Route path='/product' component={Product}></Route>
                    <Route path='/about' component={About}></Route>
                </Router>
                <a onClick={this.goTop} className={`to-top ${this.state.isTop ? 'show' : 'hidden'} `}><i className="icon-arrow-up"></i></a>
            </div> 
        )
    }
}


export default App;
