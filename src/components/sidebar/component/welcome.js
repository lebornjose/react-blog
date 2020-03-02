import React from 'react';
import jsonp from '../../../utils/jsonp';

class Welcome extends React.Component{
    constructor(props) {
       super(props);
       this.state = {
           ip: '',
           city: ''
       }
    }
    componentWillMount() {
        // eslint-disable-next-line
        this.setState({ip: returnCitySN.cip, city: returnCitySN.cname});
        console.log(this.state.ip)
    }
    render() {
        return (
            <div className="sidebar-wel sidebar-block">
                <h3 className="title"><i className="icon-smile"></i>欢迎光临</h3>
                <div className="content">
                    <p>欢迎来自{this.state.city}的朋友</p>
                    <p>您的 IP 是：{this.state.ip}</p>
                    <p>您使用的是：Mac/Chrome79</p>
                </div>
            </div>
        )
    }
}

export default Welcome;