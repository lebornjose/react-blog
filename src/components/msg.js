import React from 'react';
import avator from '../img/timg.jpeg';
import 'gitalk/dist/gitalk.css'
import GitalkComponent from "gitalk/dist/gitalk-component";

class Comment extends React.Component{
       //方法会在组件已经被渲染到 DOM 中后运行
    componentDidMount() {

    }
    render() {
        return(
            <div className="container blog-msg">
                <div className="avator">
                    <img src={avator} alt="super xing" />
                </div>
                <p className="talk">采用 Gitalk 评论系统，需使用 GitHub 账号登录，请尽情灌水吧！<span>😉</span></p>

                <p className="title">在这里可以灌水、吹牛、扯淡，但不可以订外卖!</p>
                <GitalkComponent options={{
                    clientID: "2f8d419fd8465cb46365",
                    clientSecret: "5eef734ad88addccc0f00d8944d0732bf3aab6e6",
                    repo: 'blog-comment',
                    owner: 'lebornjose',
                    admin: ['lebornjose'],
                    id: "111111",  
                    distractionFreeMode: false 
                    }} />
            </div>
        )
    }
}

export default Comment;