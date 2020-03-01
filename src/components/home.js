import React from 'react';
import Sidebar from './sidebar/index';
import ItemArticle from '../components/article/item';
import bg from '../img/021.webp';


export default () => {
    return (
        <div>
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
                    <li><a to="/home" className='active'><i className="icon-home"></i>&nbsp;主页</a></li>
                    <li><a href="/cat"><i className="icon-book"></i>&nbsp;分类</a></li>
                    <li><a href="/msg"><i className="icon-comments"></i>&nbsp;留言</a></li>
                    <li><a href="/product"><i className="icon-book"></i>&nbsp;产品</a></li>
                    <li><a href="/about"><i className="icon-user"></i>&nbsp;关于</a></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="http://www.leborn.me/blog/home/music"><i className="icon-film"></i>&nbsp;音乐</a></li>
                </ul>
            </div>
        </div>
        <div className="home-main container">
            <div className="row">
                <div className="col-md-8 article-list">
                    <ItemArticle></ItemArticle>
                    <ItemArticle></ItemArticle>
                    <ItemArticle></ItemArticle>
                    <ItemArticle></ItemArticle>
                    <ItemArticle></ItemArticle>
                    <div className="article-more">
                        <span className="more-btn">查看更多<i className="icon-long-arrow-down"></i></span>
                    </div>
                </div>
                <div className="col-md-4">
                    <Sidebar></Sidebar>
                </div>
            </div>
        </div>
        </div>
    )
}