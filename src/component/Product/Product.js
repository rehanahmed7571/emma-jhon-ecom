import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './Product.css'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';


function product(props) {

    const { name, img, seller, price, stock } = props.pro


    return (
        <div className='single-product'>
            <div >
                <img src={img} alt="" />
            </div>
            <div className='product-name'>
                <h4 >{name}</h4>
                <p>by {seller} </p>
                <br/>
                <p>${price}</p>

                <p>only {stock} left in stock - order soon</p>
                <button className='cart-add-btn' onClick={()=>props.handleAddProduct(props.pro)}><FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> add to cart</button>
            </div>
        </div>
    );
}

export default product; 