// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
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
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;