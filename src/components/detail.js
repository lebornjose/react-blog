import React from 'react';
import Sidebar from '../components/sidebar/index'
import util from '../utils/index';
import { NavLink } from 'react-router-dom';


class Detail extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            article: {},
            detail: {},
            perv: null,
            next: null,
            articleId: ''
        }
    }
    getData(id) {
        this.setState({articleId: id});
        util.get("/blog/home/jsonDetail/" + id).then((data) => {
           this.setState({article: data.article[0], detail: data.detailVO, perv: data.article[1], next: data.article[2]});
           console.log(this.state.next)
        })
    }
    componentWillReceiveProps() {
        let id = this.props.match.params.id;
        if(this.state.articleId !== '' && this.state.articleId !== id) {
            this.setState({articleId: this.props.match.params.id});
            this.getData();
        }
    }
    componentDidMount() {
        let id = this.props.match.params.id
        this.getData(id);
    }
    render() {
        return (
            <div className="container blog-detail">
                <div className="row">
                    <div className="col-md-8 article-detail">
                        <div className="top">
                            <h3 className="title">{this.state.article.title}</h3>
                            <div className="info">
                                <span><i className="icon-user"></i>{this.state.article.author}</span>
                                <span><i className="icon-calendar"></i>{util.date(this.state.article.pubtime)}</span>
                                <span><i className="icon-folder-open"></i>技术</span>
                                <span className="tag"><i className="icon-eye-open"></i>{this.state.article.reads}</span>
                            </div>
                        </div>    
                        <div className="content" dangerouslySetInnerHTML={{ __html:this.state.detail.content}}></div>
                        <div className="prev-next">
                            {
                                this.state.perv ?  <div className="perv">
                                <NavLink to={`/cat/detail/` + this.state.perv.articleId} className="arrow"><i className="icon-angle-left"></i>上一页</NavLink>
                                 <a className="article-title">{this.state.perv.title}</a>
                                <span><i className="icon-tags"></i>{this.state.perv.keyword}</span>
                                 </div> : ''
                            }
                            {this.state.next ? <div className="next">
                                <NavLink to={`/cat/detail/` + this.state.next.articleId} className="arrow">下一页<i className="icon-angle-right"></i></NavLink>
                                <a className="article-title">{this.state.next.title }</a>
                                {<span className="tag"><i className="icon-tags"></i>{this.state.next.keyword}</span> }
                            </div> : '' }
                           
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