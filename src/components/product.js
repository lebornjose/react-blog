import React from 'react';
import Sidebar from './sidebar/index';
import ItemProduct from '../components/product/item';



class Product extends React.Component{
    render() {
        return (
            <div className="container product-blog">
                 <div className="row">
                    <div className="col-md-8 product-list">
                        <ItemProduct></ItemProduct>
                        <ItemProduct></ItemProduct>
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