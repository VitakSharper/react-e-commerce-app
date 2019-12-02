import React from 'react'
import './cart-icon.styles.scss'
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";
import {connect} from 'react-redux';
import {toggleCartHidden} from "../../redux/cart/cart.actions";


const CartIcon = ({toggleCartHidden, count}) => {
    return (
        <div className='cart-icon' onClick={toggleCartHidden}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{count}</span>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({toggleCartHidden: () => dispatch(toggleCartHidden())});
const mapStateToProps = ({cart: {cartItems}}) => ({
    count: cartItems.reduce((acc, i) => acc = acc + i.quantity, 0)
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
