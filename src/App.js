import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import bg from './img/021.webp';
import './assets/css/all.scss';
import Home from './components/home';

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
                            <li><Link to="/"><i className="icon-home"></i>&nbsp;主页</Link></li>
                            <li><a href="#"><i className="icon-book"></i>&nbsp;分类</a></li>
                            <li><a href="#"><i className="icon-comments"></i>&nbsp;留言</a></li>
                            <li><a href="#"><i className="icon-book"></i>&nbsp;产品</a></li>
                            <li><a href="#"><i className="icon-user"></i>&nbsp;关于</a></li>
                            <li><a href="#"><i className="icon-film"></i>&nbsp;音乐</a></li>
        
                        </ul>
                    </div>
                </div>
                <Route path='/' component={Home}></Route>
            </Router>
        </div> 
    );
}

export default App;
