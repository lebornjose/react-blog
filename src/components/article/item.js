import React from 'react';
import { NavLink } from 'react-router-dom'
import util from '../../utils/index';

class Item extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            article: props.item,
            num: 7
        }
    }
    componentWillMount() {    
        this.setState({num: parseInt(Math.random()*1000)});
    }
    render() {
        return (
            <div className="item-article">
                <h2 className="title"><NavLink to={'/cat/detail/' + this.state.article.articleId}>{this.state.article.title}</NavLink></h2>
                <div className="article-info">
                    <span>
                       <i className="icon-user"></i> {this.state.article.author}
                    </span>
                    <span>
                       <i className="icon-calendar"></i> {util.date(this.state.article.pubtime)}
                    </span>
                    <span>
                        <i className="icon-eye-open"></i>{this.state.article.reads}
                    </span>
                    <span>
                        <i className="icon-heart-empty"></i>{this.state.num}
                    </span>
                </div>
                <div className="article-content">
                  {this.state.article.summary}
                </div>
                <div className="article-bom">
                <NavLink type="button" to={'/cat/detail/' + this.state.article.articleId} className="btn btn-primary"><i className="icon-book"></i> 阅读全文</NavLink>
                </div>
            </div>
        )
    }
}

export default Item;