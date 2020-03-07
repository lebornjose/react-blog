import React from 'react';
import { NavLink } from 'react-router-dom'


class Head extends React.Component{
    constructor(props){
        super(props);
    }
    jump = () => {
        debugger
        // browserHistory.push("/cat/category");
    }
    render() {
        return (
            <header className={`blog-header ${this.props.isTop ? 'show' : 'hidden'}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                        <span className="logo">Super xing</span>
                        </div>
                        <div className="col-md-8">
                            <ul>
                                <li><NavLink to="/home" ><i className="icon-home"></i>主页</NavLink></li>
                                <li><NavLink to="/cat/category"><i className="icon-archive"></i>分类</NavLink></li>
                                <li><NavLink to="/cat/msg"><i className="icon-comments"></i>留言</NavLink></li>
                                <li><NavLink to="/cat/product"><i className="icon-book"></i>产品</NavLink></li>
                                <li><NavLink to="/cat/about"><i className="icon-user"></i>关于</NavLink></li>
                            </ul>
                        </div> 
                    </div> 
                </div>       
            </header>
        )
    }
}

export default Head;