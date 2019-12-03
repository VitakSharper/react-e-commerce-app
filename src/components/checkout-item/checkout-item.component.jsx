import React from 'react';
import './checkout-item.styles.scss';

import {connect} from 'react-redux'
import {createStructuredSelector} from "reselect";
import {clearItemFromCart} from "../../redux/cart/cart.actions";


const CheckoutItem = ({item, clearItem}) => {
    const {name, imageUrl, price, quantity} = item;

    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt="item"/>
            </div>
            <span className='name'>{name}</span>
            <span>&#10094;</span>
            <span className='quantity'>{quantity}</span>
            <span>&#10095;</span>
            <span className='price'>$ {price} {price * quantity > price ? `  ($ ${price * quantity})` : ''}</span>
            <div className='remove-button' onClick={() => clearItem(item)}>&#10005;</div>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
