// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
const Shop = () => {
    const  [products,setProducts] = useState([]);
    const [cart,setCarts] = useState([]);

    useEffect(()=>{
       fetch('products.json')
       .then(res=>res.json())
       .then(data=>setProducts(data))
    },[])


    //local storage a cart er information niye kecal
    useEffect(()=>{
        const storedCart = getShoppingCart();
        const savedCart = [];
        //step:1 get id
        for(const id in storedCart){
            //step2 get the product by using id
            const addedProduct = products.find(product=>product.id === id) 

            //step3 get quantity of the product
            if(addedProduct){
                const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            //step4: add the added product to the saved cart
            savedCart.push(addedProduct);
            }
            console.log(addedProduct);
        }
        //step5: set to the cart
        setCarts(savedCart)
    },[products])

    const handleClick = (product)=>{
         const newcart = [...cart,product];
         setCarts(newcart);
         addToDb(product.id)
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