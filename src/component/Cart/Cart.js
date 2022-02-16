import React from 'react';
import product from '../Product/Product';

const Cart = (props) => {
    const cart = props.cart
    let total = 0;
    let productPrice = 0
    for(let i=0; i<cart.length; i++){
        const product = cart[i];
        total = total + product.price
     productPrice = product.price
    }
    let shipping = 0;
     if(total > 35){
        shipping = 0;
    }
    else if(total < 15 && total !== 0){
        shipping = 4.99
    }
    else if(total > 15 && total < 35){
        shipping = 12.99;
    }
    const tax = total / 10;
    tax.toFixed(2)
    Number(tax)
    const grandTotal = total + shipping + tax
    return (
        <div>
            <h3>Order Summery</h3>
            <h3>items Ordered: {cart.length}</h3>
            <h4>product Price : {productPrice}</h4>
            <p>tax  vat : {tax}</p>
            <p> Shipping Cost : {shipping}</p>
            <p>Total:{grandTotal} </p>
        </div>
    );
};

export default Cart;