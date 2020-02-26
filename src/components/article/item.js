import React from 'react';

class Item extends React.Component{
    render() {
        return (
            <div className="item-article">
                <h2 className="title">2019年 我的梦</h2>
                <div className="article-info">
                    <span>
                        <i className="icon-user"></i> 小刀
                    </span>
                    <span>
                        <i className="icon-calendar"></i> 2019-01-21
                    </span>
                    <span>
                        <i className="icon-eye-open"></i>109
                    </span>
                    <span>
                        <i className="icon-heart-empty"></i>1
                    </span>
                </div>
                <div className="article-content">
                具体操作sudo npm install -g create-react-appmkdir react-first-democd react-first-democreate-react-app react-clicd react-clinpm install (依赖安装完以后执行npm start)npm start错误$ react-scripts startThere might be a
                </div>
                <div className="article-bom">
                <button type="button" class="btn btn-primary"><i className="icon-book"></i> 阅读全文</button>
                </div>
            </div>
        )
    }
}

export default Item;