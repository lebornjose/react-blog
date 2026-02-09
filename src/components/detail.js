import React from 'react';
import Sidebar from '../components/sidebar/index'
import util from '../utils/index';
import GitalkComponent from "gitalk/dist/gitalk-component";


class Detail extends React.Component{
    mounted = false;
    constructor(props) {
        super(props);
        this.state = {
            article: {},
            detail: {},
            perv: null,
            next: null,
            articleId: ''
        }
    };
    getData(id) {
        util.get("/api/articles/" + id).then((res) => {
            const data = res.data;
            if(this.mounted){
                this.setState({article: data, perv: data.next, next: data.prev});
                console.log(this.state.next)
            }
        })
    };
    getArticle(id) {
        this.props.history.push('/cat/detail/' + id);
        util.get("/api/articles/" + id).then((res) => {
            const data = res.data;
            this.setState({article: data, perv: data.next, next: data.prev});
        })
    };
    componentDidMount() {
        this.props.history.listen(() => {
        //当路由切换时
           window.scrollTo(0, 0);
        });
        this.mounted = true;
        let id = this.props.match.params.id;
        this.getData(id);
    };
    componentWillUnmount() {
        this.mounted = false
    };
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
                        <div className="content" dangerouslySetInnerHTML={{ __html:this.state.article.content}}></div>
                        <div className="prev-next">
                            {
                                this.state.next ?  <div className="perv">
                                <a className="arrow" onClick={() => this.getArticle(this.state.next.article_id)}><i className="icon-angle-left"></i>上一页</a>
                                 <a className="article-title" onClick={() => this.getArticle(this.state.next.article_id)}>{this.state.next.title}</a>
                                {/* <span><i className="icon-tags"></i>{this.state.perv.keyword}</span> */}
                                 </div> : ''
                            }
                            {
                               this.state.prev ? <div className="next">
                                <a className="arrow" onClick={() => this.getArticle(this.state.prev.article_id)}>下一页<i className="icon-angle-right"></i></a>
                                <a className="article-title" onClick={() => this.getArticle(this.state.prev.article_id)} >{this.state.prev.title }</a>
                                {/* {<span className="tag"><i className="icon-tags"></i>{this.state.next.keyword}</span> } */}
                                </div> : ''
                             }
                        </div>
                        {  this.state.article.articleId ?  <GitalkComponent options={{
                            clientID: "2f8d419fd8465cb46365",
                            clientSecret: "5eef734ad88addccc0f00d8944d0732bf3aab6e6",
                            repo: 'blog-comment',
                            owner: 'lebornjose',
                            admin: ['lebornjose'],
                            id: this.state.article.articleId,
                            distractionFreeMode: false
                            }} /> : ''
                        }
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
