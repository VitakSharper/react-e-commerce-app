import React from 'react';
import './cart-dropdown.styles.scss';
import {connect} from 'react-redux'
import CustomButton from "../../custom-button/custom-button.component";
import CartItem from "../../cart-item/cart-item.component";

const CartDropdown = ({cartItems}) => (
    <div className='cart-dropdown'>
        <div className='cart-items'>
            {
                cartItems.map(c => (
                    <CartItem
                        key={c.id}
                        item={c}
                    />
                ))
            }
        </div>
        <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
);

const mapStateToProps = ({cart: {cartItems}}) => ({cartItems});
export default connect(mapStateToProps)(CartDropdown);
