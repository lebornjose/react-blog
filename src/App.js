import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import bg from './img/021.webp';
import './assets/css/all.scss';
import Home from './components/home';
import Category from './components/category';
import Msg from './components/msg';
import Product from './components/product';
import About from './components/about';

function App() {
    return (
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
                            <li><Link to="/home"><i className="icon-home"></i>&nbsp;主页</Link></li>
                            <li><Link to="/cat"><i className="icon-book"></i>&nbsp;分类</Link></li>
                            <li><Link to="/msg"><i className="icon-comments"></i>&nbsp;留言</Link></li>
                            <li><Link to="/product"><i className="icon-book"></i>&nbsp;产品</Link></li>
                            <li><Link to="/about"><i className="icon-user"></i>&nbsp;关于</Link></li>
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
        </div> 
    );
}

export default App;
