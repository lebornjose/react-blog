import React from 'react';
import Sidebar from './sidebar/index';
import ItemArticle from '../components/article/item';


export default () => {
    return (
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
    )
}