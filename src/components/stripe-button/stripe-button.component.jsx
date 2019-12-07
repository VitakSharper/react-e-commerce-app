import React from 'react';
import StripeCheckout from "react-stripe-checkout";

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const stripeToken = `${process.env.REACT_APP_STRIPE_TOKEN}`

};


export default StripeCheckoutButton;
