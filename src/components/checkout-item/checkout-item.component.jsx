import React from 'react';
import './checkout-item.styles.scss';

import {connect} from 'react-redux'
import {clearItemFromCart, removeItem, addItem} from "../../redux/cart/cart.actions";


const CheckoutItem = ({item, clearItem, removeItem, addItem}) => {
    const {name, imageUrl, price, quantity} = item;

    return (
        <div className='checkout-item'>
            <div className='image-container'>
                <img src={imageUrl} alt="item"/>
            </div>
            <span className='name'>{name}</span>
            <span className='quantity'>
                <div className={`${quantity === 1 ? 'disable-arrow' : 'arrow'}`}
                     onClick={() => removeItem(item)}>&#10094;
                </div>
                <span className='value'>{quantity}</span>
                <div className='arrow' onClick={() => addItem(item)}>&#10095;</div>
            </span>
            <span className='price'>$ {price}
                <span className='small-price'>{price * quantity > price ? `  ($ ${price * quantity})` : ''}</span>
            </span>
            <div className='remove-button' onClick={() => clearItem(item)}>&#10005;</div>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    clearItem: item => dispatch(clearItemFromCart(item)),
    removeItem: item => dispatch(removeItem(item)),
    addItem: item => dispatch(addItem(item))
});

export default connect(null, mapDispatchToProps)(CheckoutItem);
