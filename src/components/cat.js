import React from 'react';
import { NavLink,withRouter} from 'react-router-dom';
import bg from '../img/cover1.jpg';


class Cat extends React.Component{
    constructor(props) {
        super(props);
    }

    onKeyup = (e) => {
        if(e.keyCode === 13) {
            let keyword = this.refs.keyword.value;
            this.props.history.push('/cat/search/' + keyword);
        }
    }
    render() {
      return (
        <div>
            <div className="home-top blog-cat container-fluid cover">
                <div className="bg">
                    <img src={bg} alt="背景" className="bg-img"/>
                </div>
                <div className="home-search">
                    <div className="searchFrom">
                        <input type="text" ref='keyword'  onKeyUp={this.onKeyup} className="input" placeholder="世界这么大，探索一下"/>
                        <i className="icon icon-search"></i>
                    </div>
                </div>
                <div className="home-menu">
                    <ul>
                        <li><NavLink to="/home"><i className="icon-home"></i>&nbsp;主页</NavLink></li>
                        <li><NavLink to="/cat/category" activeClassName='active'><i className="icon-archive"></i>&nbsp;分类</NavLink></li>
                        <li><NavLink to="/cat/msg" activeClassName='active'><i className="icon-comments"></i>&nbsp;留言</NavLink></li>
                        <li><NavLink to="/cat/product" activeClassName='active'><i className="icon-book"></i>&nbsp;产品</NavLink></li>
                        <li><NavLink to="/cat/about" activeClassName='active'><i className="icon-user"></i>&nbsp;关于</NavLink></li>
                        <li><a target="_blank" rel="noopener noreferrer" href="http://api.leborn.me/blog/home/music"><i className="icon-film"></i>&nbsp;音乐</a></li>
                    </ul>
                </div>
            </div>
            {this.props.children}
        </div>

      )
    }
}


export default withRouter(Cat);
