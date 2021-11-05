import React from 'react';
import Sidebar from '../components/sidebar/index';
import util from '../utils/index';



class Category extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }
    getData = () => {
       util.get('/blog/home/jsonCategory').then((data) => {
           data.map((item, index) => {
               item.child = [];
           });
           this.setState({list: data});
       })
    };
    getArticle(categoryId,index) {
        if(this.state.list[index].child.length === 0) {
            util.get('/blog/home/jsonList/' + categoryId).then((data) => {
                let articleList = this.state.list;
                articleList[index].child = data;
                this.setState({list: articleList});
            })
        }
    };
    detail(articleId) {
        this.props.history.push('/cat/detail/' + articleId);
    };
    componentDidMount() {
       this.getData();
    };
    render() {
        let DOM = this.state.list.map((item, index) => ( <li key={index} onClick={ () => this.getArticle(item.categoryId, index)}><i className="icon-folder-open"></i>{item.title}
            {item.child.length !==0 ?
            <ul className="article-child">
                {item.child.map((itemChild, inx) => (<li key={inx} onClick={() => this.detail(itemChild.articleId)}><i className="icon-file"></i><a>{itemChild.title}</a></li>))}
            </ul> : ''}
        </li>));
        return (
            <div className="home-main container">
                <div className="row">
                    <div className="col-md-8 category-list">
                        <div className="blog-category">
                            <h3 className="title">所有分类</h3>
                            <ul className="article-category">
                                {DOM}
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
}

export default Category;
