import React from 'react';


class ItemProduct extends React.Component{
    render() {
        return (
            <div className="item-product row">
                <div className="left col-md-4">
                    <img className="cover" src="http://www.leborn.me/upload/1607/18/2315260041317.jpg"/>
                </div>
                <div className="right col-md-8">
                    <h3 className="title">Vue 版本博客</h3>
                    <p className="desc">vue 真心是一个简介的框架，非常喜欢，我个博客也是我的vue.js 起步之路，后面也希望我和vue.js 都能走的更远</p>
                    <p className="tip"><i className="icon-star"></i>用vue重新开发的博客系统</p>
                </div>
                <a type="button" class="btn btn-primary"><i className="icon-link"></i> 查看详情</a>
            </div>
        )
    }
}

export default ItemProduct;