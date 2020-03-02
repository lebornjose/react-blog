import React from 'react';
import Sidebar from '../components/sidebar/index'


class Detail extends React.Component{
    render() {
        return (
            <div className="container blog-detail">
                <div className="row">
                    <div className="col-md-8 article-detail">
                        <div className="top">
                            <h3 className="title">我的每一天</h3>
                            <div className="info">
                                <span><i className="icon-user"></i>小刀</span>
                                <span><i className="icon-calendar"></i>2018-01-09</span>
                                <span><i className="icon-folder-open"></i>技术</span>
                                <span><i className="icon-eye-open"></i>123</span>
                            </div>
                        </div>    
                        <div className="content">
                            <p>文章内容</p>
                        </div>
                        <div className="prev-next">
                            <div className="perv">
                                <a className="arrow"><i className="icon-angle-left"></i>上一页</a>
                                <a className="article-title">idea 激活 永久激活方法</a>
                                <span><i className="icon-tags"></i>idea</span>
                            </div>
                            <div className="next">
                                <a className="arrow">上一页<i className="icon-angle-right"></i></a>
                                <a className="article-title">idea 激活 永久激活方法</a>
                                <span><i className="icon-tags"></i>idea</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                       <Sidebar></Sidebar> 
                    </div>
                </div>
            </div>
        )
    }
}

export default Detail;