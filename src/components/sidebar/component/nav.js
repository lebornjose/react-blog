import React from 'react';
import { NavLink } from 'react-router-dom'


class Nav extends React.Component{
    render() {
        return (
            <div className="sidebar-nav sidebar-block">
                <h3 className="title"><i className="icon-plane"></i>站内导航</h3>
                <ul className="content row">
                    <li><NavLink to="/cat/category">
                        <i className="icon-book"></i>文章分类</NavLink></li>
                    <li><NavLink to="/cat/about">
                        <i className="icon-info"></i>关于</NavLink></li>
                    <li><a href=""><i className="icon-link"></i>我的友链</a></li>
                    <li><NavLink to="/cat/msg"><i className="icon-comments"></i>留言板</NavLink></li>
                    <li><NavLink to="/cat/product"><i className="icon-flag"></i>项目</NavLink></li>
                    <li><a target="_blank" rel="noopener noreferrer" href="http://www.leborn.me/blog/home/music"><i className="icon-film"></i>音乐</a></li>
                </ul>
            </div>
        )
    }
}

export default Nav;