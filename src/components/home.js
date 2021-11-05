import React from 'react';
import Sidebar from './sidebar/index';
import ItemArticle from '../components/article/item';
import bg from '../img/021.webp';
import util from '../utils/index';
import { NavLink } from 'react-router-dom';

class Home extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            text: '颓废中保持乐观，忙碌中鄙视功利，永保一颗向往的心。',
            inx: 0,
            page: 0,
            timer: 0,
            textDom: null,
            articleList: [],
            more: false,
            keyword: ""
        };
    };
    addText = () => {
        if(this.state.inx <= this.state.text.length) {
            let index = this.state.inx;
            index++
            this.setState({inx: index});
            if(document.getElementById("J_text") !== null) {
                document.getElementById("J_text").innerHTML = this.state.text.slice(0, this.state.inx) + '_';
            }
            this.setState({timer: setTimeout(this.addText, 200)});
        } else {
            document.getElementById("J_text").innerHTML = this.state.text;//结束打字,移除 _ 光标
            clearTimeout(this.state.timer);
        }
    };
    getList = () => {
        util.get('/blog/home/page/' + this.state.page).then((res) => {
            if(res.length===0) {
               this.setState({more: true});
               setTimeout(() => {
                this.setState({more: false});
               }, 2000);
            }
            if(this.state.articleList.length === 0) {
                this.setState({articleList: res});
            } else {
                this.setState({articleList: this.state.articleList.concat(res)});
            }
        })
    };
    getMore = () => {
        this.state.page++;
        this.getList();
    };
    onKeyup = (e) => {
        if(e.keyCode === 13) {
            let keyword = this.refs.keyword.value;
            this.props.history.push('/cat/search/' + keyword);
        }
    };
    componentWillUnmount() {
        this.setState({inx: 0});
        clearTimeout(this.state.timer);
    };
    componentDidMount() {
       this.addText();
       this.getList();
    };
    render() {
        let DOM = this.state.articleList.map((item, index) => ( <ItemArticle key={index} item={item}></ItemArticle>))
        return (
            <div>
                <div className="home-top container-fluid cover">
                    <div className="bg">
                        <img src={bg} alt="背景" className="bg-img"/>
                    </div>
                    <div className="home-search">
                        <div className="searchFrom">
                            <input type="text" className="input" ref='keyword'  onKeyUp={this.onKeyup} placeholder="世界这么大，探索一下"/>
                            <i className="icon icon-search"></i>
                        </div>
                    </div>
                    <div className="home-menu">
                        <ul>
                            <li><NavLink to="/home" className='active'><i className="icon-home"></i>&nbsp;主页</NavLink></li>
                            <li><NavLink to="/cat/category"><i className="icon-archive"></i>&nbsp;分类</NavLink></li>
                            <li><a href="/cat/msg"><i className="icon-comments"></i>&nbsp;留言</a></li>
                            <li><a href="/cat/product"><i className="icon-book"></i>&nbsp;产品</a></li>
                            <li><a href="/cat/about"><i className="icon-user"></i>&nbsp;关于</a></li>
                            <li><a target="_blank" rel="noopener noreferrer" href="http://www.leborn.me/blog/home/music"><i className="icon-film"></i>&nbsp;音乐</a></li>
                        </ul>
                    </div>
                    <div id="J_text" className="home-text"></div>
                </div>
                <div className="home-main container">
                    <div className="row">
                        <div className="col-md-8 article-list">
                            {DOM}
                            <div className="article-more">
                                <span className="more-btn" onClick={this.getMore}>查看更多<i className="icon-long-arrow-down"></i></span>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <Sidebar></Sidebar>
                        </div>
                    </div>
                </div>
                <div className={`alert alert-danger ${this.state.more ? 'sh0w' : 'hidden'}`} role="alert">没有更多文章了!</div>
            </div>
        )
    }
}
export default Home;
