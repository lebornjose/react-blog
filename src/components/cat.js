import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom'
import bg from '../img/cover1.jpg';
import Category from '../components/category';
import Msg from '../components/msg';
import Product from '../components/product';
import About from '../components/about';
import Detail from '../components/detail';


class Cat extends React.Component{
    render() {
      return (
        <Router>
            <div className="home-top blog-cat container-fluid cover">
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
                        <li><a href="/home"><i className="icon-home"></i>&nbsp;主页</a></li>
                        <li><NavLink to="/cat/category" activeClassName='active'><i className="icon-archive"></i>&nbsp;分类</NavLink></li>
                        <li><NavLink to="/cat/msg" activeClassName='active'><i className="icon-comments"></i>&nbsp;留言</NavLink></li>
                        <li><NavLink to="/cat/product" activeClassName='active'><i className="icon-book"></i>&nbsp;产品</NavLink></li>
                        <li><NavLink to="/cat/about" activeClassName='active'><i className="icon-user"></i>&nbsp;关于</NavLink></li>
                        <li><a target="_blank" rel="noopener noreferrer" href="http://www.leborn.me/blog/home/music"><i className="icon-film"></i>&nbsp;音乐</a></li>
                        <li><NavLink to="/cat/detail" activeClassName='active'><i className="icon-user"></i>&nbsp;112</NavLink></li>
                    </ul>
                </div>
            </div>
            <Route path='/cat/category' component={Category}></Route>
            <Route path='/cat/msg' component={Msg}></Route>
            <Route path='/cat/product' component={Product}></Route>
            <Route path='/cat/about' component={About}></Route>
            <Route path="/cat/detail" component={Detail}></Route>
        </Router>  
      )
    }
}


export default Cat;