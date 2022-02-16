import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';


const Shop = () => {
    const first10 = fakeData.slice(0,10)
    const [products, setProducts]=useState(first10)
    const [cart, setCart]=useState([])

    const handleAddProduct=(product)=>{
        const newCart = [...cart , product]
        setCart(newCart)

    }
    
    return (
        <div className='shopContainer'>
            <div className='product-container'>
                
                    {
                        products.map(product => <Product handleAddProduct={handleAddProduct} pro={product}></Product>)
                    }
               
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>


        </div>
    );
};

export default Shop;