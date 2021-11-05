import React from 'react';
import Sidebar from './sidebar/index';
import ItemProduct from '../components/product/item';
import util from '../utils/index';

class Product extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            productList: []
        }
    }
    getList = () => {
        util.get('/blog/home/jsonProduct').then((res) => {
            this.setState({productList: res});
        });
    };
    componentDidMount() {
       this.getList();
    };
    render() {
        let DOM = this.state.productList.map((item, index) => ( <ItemProduct key={index} item={item}></ItemProduct>))
        return (
            <div className="container product-blog">
                 <div className="row">
                    <div className="col-md-8 product-list">
                        {DOM}
                    </div>
                    <div className="col-md-4">
                        <Sidebar></Sidebar>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product;
