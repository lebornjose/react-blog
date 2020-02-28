import React from 'react';
import avator from '../img/timg.jpeg';

const width={width: '70%'}
const width1={width: '40%'}
const width2={width: '20%'}
const width3={width: '50%'}

class About extends React.Component{
    render() {
        return(
            <div className="container about-blog">
                <div className="avator">
                    <img src={avator}/>
                </div>
                <div className="about-content">
                <p>Nick: lebornjose</p>
                <p>Home：http://www.leborn.me</p>
                <p>Gmail：lebornjose@gmail.com</p>
                <p>Github：https://github.com/lebornjose</p>
                <p>
                    我的中文名叫小猩猩，英文名 leborn jose 我喜欢叫自己 Super xing，这起源是因为Super man，我希望自己有一天变得厉害，变得超级，所以我喜欢叫自己Super xing。
                </p>
                <p>我是一个程序员，号称码农。主要从事B/S端的开发，主要熟悉 .net html5,javascript。</p>
                <p>我热爱前端编程，因为我觉得前端经常会给我带来意想不到的惊喜，一个特效的实现，一个效果的简单实现。都可以让你欣喜半天。html5+css3的集合简直就是天作之和，canvas代替了false，vedio替代了传统网页基于播放器播放。</p>
                <p>对于互联网，我觉得我是一个懂互联网的人。有产品概念的人。我认为一个产品最重要的是 “做自己”，有自己的特色，有自己的灵魂，这样一个产品才能经久不衰。</p>
                <p>喜欢阅读，热爱运动，喜欢挑战并且有很强的适应能力；</p>
                <p>颓废中保持乐观，忙碌中鄙视功利，不知不觉违背初衷，时隔一载解开心结，选择众多一味迷惘，永保一颗向往的心。</p>
                </div>
                <div className="about-func">
                    <div className="item-fun row">
                        <div className="col-md-2">html+css+js</div> 
                        <div className="progress col-md-8">
                            <div className="progress-bar bg-success" style={width}></div>
                        </div>
                    </div>
                    <div className="item-fun row">
                        <div className="col-md-2">java</div> 
                        <div className="progress col-md-8">
                            <div className="progress-bar bg-success" style={width2}></div>
                        </div>
                    </div>
                    <div className="item-fun row">
                        <div className="col-md-2">C#</div> 
                        <div className="progress col-md-8">
                            <div className="progress-bar bg-info" style={width2}></div>
                        </div>
                    </div>
                    <div className="item-fun row">
                        <div className="col-md-2">nodeJs</div> 
                        <div className="progress col-md-8">
                            <div className="progress-bar bg-warning" style={width1}></div>
                        </div>
                    </div>
                    <div className="item-fun row">
                        <div className="col-md-2">cordova</div> 
                        <div className="progress col-md-8">
                            <div className="progress-bar bg-warning" style={width3}></div>
                        </div>
                    </div>
                    <div className="item-fun row">
                        <div className="col-md-2">electron</div> 
                        <div className="progress col-md-8">
                            <div className="progress-bar bg-warning" style={width3}></div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default About;