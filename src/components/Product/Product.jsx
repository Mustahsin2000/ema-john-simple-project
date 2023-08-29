// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Product.css'
const Product = (props) => {
    // eslint-disable-next-line react/prop-types
    const {name,price,img,category,seller,ratings} = props.product
    return (
        <div className='product'> 
        <img src={img} alt="" />
            <div className='product-info'>
            <h4>Name: {name}</h4>
            <p>price: {price}</p>
            <p>category: {category}</p>
            <p>seller: {seller}</p>
            <p>ratings: {ratings}</p>
            </div>
            <button className='btn-cart'>Add to cart</button>
        </div>
    );
};

export default Product;