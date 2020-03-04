import React from 'react';
import Sidebar from '../components/sidebar/index'
import util from '../utils/index';


class Detail extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            article: {},
            detail: {},
            perv: null,
            next: null
        }
    }
    getData(id) {
        util.get("/blog/home/jsonDetail/" + id).then((data) => {
           this.setState({article: data.article[0], detail: data.detailVO, perv: data.article[1], next: data.article[2]});
           console.log(this.state.next)
        })
    }
    componentDidMount() {
        this.getData(this.props.match.params.id);
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
                                <a className="arrow"><i className="icon-angle-left"></i>上一页</a>
                                <a className="article-title">idea 激活 永久激活方法</a>
                                <span><i className="icon-tags"></i>idea</span>
                                 </div> : ''
                            }
                            {this.state.next ? <div className="next">
                                <a className="arrow">下一页<i className="icon-angle-right"></i></a>
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