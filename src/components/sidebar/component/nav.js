import React from 'react';



export default () => {
   return (
       <div className="sidebar-nav sidebar-block">
           <h3 className="title"><i className="icon-plane"></i>站内导航</h3>
           <ul className="content row">
               <li><a href="">
                   <i className="icon-book"></i>文章分类</a></li>
               <li><a href="">
                   <i className="icon-info"></i>关于</a></li>
               <li><a href=""><i className="icon-link"></i>我的友链</a></li>
               <li><a href=""><i className="icon-comments"></i>留言板</a></li>
               <li><a href=""><i className="icon-flag"></i>项目</a></li>
               <li><a href=""><i className="icon-film"></i>音乐</a></li>
           </ul>
       </div>
   )
}