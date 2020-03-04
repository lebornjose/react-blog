import React from 'react';
import avator from '../img/timg.jpeg';
import util from '../utils/index'

const width={width: '70%'}
const width1={width: '40%'}
const width2={width: '20%'}
const width3={width: '50%'}

class About extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            content: ''
        }
    }
    componentDidMount() {
       util.get("/blog/home/jsonAbout/1504202124283691142").then((res) => {
          this.setState({content: res.content});
       })
    }
    render() {
        return(
            <div className="container about-blog">
                <div className="avator">
                    <img src={avator}/>
                </div>
                <div className="about-content">
                    <div dangerouslySetInnerHTML={{ __html:this.state.content}}></div>
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