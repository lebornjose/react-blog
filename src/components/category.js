import React from 'react';
import Sidebar from '../components/sidebar/index'

export default () => {
   return (
       <div className="home-main container">
           <div className="row">
              <div className="col-md-8 category-list">
                  <div className="blog-category">
                    <h3 className="title">所有分类</h3>
                    <ul className="article-category">
                        <li className="active">
                            <i className="icon-folder-open"></i>我是Super man
                            <ul className="article-child">
                                <li><i className="icon-file"></i><a>你以为自己很屌，其实是你圈子弱，平台低，对手挫</a></li>
                                <li><i className="icon-file"></i><a>你以为自己很屌，其实是你圈子弱，平台低，对手挫</a></li>
                                <li><i className="icon-file"></i>你以为自己很屌，其实是你圈子弱，平台低，对手挫</li>
                                <li><i className="icon-file"></i>你以为自己很屌，其实是你圈子弱，平台低，对手挫</li>
                            </ul>
                        </li>
                        <li><i className="icon-folder-open"></i>linux菜鸟</li>
                        <li><i className="icon-folder-open"></i>热爱前端</li>
                        <li><i className="icon-folder-open"></i>技术体会</li>
                        <li><i className="icon-folder-open"></i>个人感悟</li>
                        <li><i className="icon-folder-open"></i>移动端开发</li>
                    </ul>
                  </div>
              </div>
              <div className="col-md-4">
                        <Sidebar></Sidebar>
                    </div>
           </div>
       </div>
   )
}