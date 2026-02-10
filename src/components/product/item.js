import React from 'react';


class ItemProduct extends React.Component{
    constructor(props) {
       super(props);
    }
    cover(id) {
        let url = 'http://api.leborn.me/upload/';
        url += id.substring(0,4) + "/" + id.substring(4,6) + "/"+ id.substring(6, id.length)+ ".jpg";
        return url;
    }
    componentDidMount() {
      
    }
    coverStyle = (id) => {
        let url = 'http://api.leborn.me/upload/';
        url += id.substring(0,4) + "/" + id.substring(4,6) + "/"+ id.substring(6, id.length)+ ".jpg";
        return {
            backgroundImage: "url(" + url + ")",
            backgroundSize: 'cover'
        }
    }
    render() {
        return (
            <div className="item-product row">
                <div className="left col-md-4">
                    <div className="cover" style={this.coverStyle(this.props.item.commend_id)}></div>
                </div>
                <div className="right col-md-8">
                    <h3 className="title">{this.props.item.title}</h3>
                    <p className="desc">{this.props.item.describe}</p>
                    <p className="tip"><i className="icon-star"></i>{this.props.item.note}</p>
                </div>
                <a type="button" href={this.props.item.url} target="_blank" className="btn btn-primary"><i className="icon-link"></i> 查看详情</a>
            </div>
        )
    }
}

export default ItemProduct;
