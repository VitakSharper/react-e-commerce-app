import React from 'react';
import './checkout-item.styles.scss';

import {connect} from 'react-redux'
import {createStructuredSelector} from "reselect";


const CheckoutItem = ({item: {name, quantity, price, imageUrl}, dispatch}) => (
    <div className='checkout-item'>
        <div className='image-container'>
            <img src={imageUrl} alt="item"/>
        </div>
        <span className='name'>{name}</span>
        <span>&#10094;</span>
        <span className='quantity'>{quantity}</span>
        <span>&#10095;</span>
        <span className='price'>$ {price} {price * quantity > price ? `  ($ ${price * quantity})` : ''}</span>
        <div className='remove-button'>&#10005;</div>
    </div>
);

export default connect()(CheckoutItem);
