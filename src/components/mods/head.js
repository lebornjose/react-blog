import React from 'react';

class Head extends React.Component{
    constructor(props){
        super(props);
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
                                <li><a href="/home"><i className="icon-home"></i>主页</a></li>
                                <li><a href="/cat"><i className="icon-archive"></i>分类</a></li>
                                <li><a href="/msg"><i className="icon-comments"></i>留言</a></li>
                                <li><a href="/product"><i className="icon-book"></i>产品</a></li>
                                <li><a href="/about"><i className="icon-user"></i>关于</a></li>
                            </ul>
                        </div> 
                    </div> 
                </div>       
            </header>
        )
    }
}

export default Head;