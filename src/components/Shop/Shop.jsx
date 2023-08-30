// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
const Shop = () => {
    const  [products,setProducts] = useState([]);
    const [cart,setCarts] = useState([]);

    useEffect(()=>{
       fetch('products.json')
       .then(res=>res.json())
       .then(data=>setProducts(data))
    },[])

    const handleClick = (product)=>{
         const newcart = [...cart,product];
         setCarts(newcart);
    }

    return (
        <div className='shop-container'>
            <div className="product-container">
                 {
                    products.map(product=><Product product={product} key={product.id}
                        handleClick={handleClick}
                    ></Product>)
                 }
            </div>
            <div className="cart-container">
                 <h2>cart container</h2>
                 <h4>Selected Items: {cart.length}</h4>
            </div>
        </div>
    );
};

export default Shop;