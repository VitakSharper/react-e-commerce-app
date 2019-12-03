import React from 'react';
import './cart-dropdown.styles.scss';
import {connect} from 'react-redux'
import CustomButton from "../../custom-button/custom-button.component";
import CartItem from "../../cart-item/cart-item.component";

import {createStructuredSelector} from "reselect";
import {selectCartItems} from "../../../redux/cart/cart.selectors";

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

const mapStateToProps = createStructuredSelector({cartItems: selectCartItems});
export default connect(mapStateToProps)(CartDropdown);
