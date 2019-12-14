import React from 'react';
import StripeCheckout from "react-stripe-checkout";
import axios from 'axios';

const StripeCheckoutButton = ({price}) => {

    const priceForStripe = price * 100;
    const publishableKey = process.env.REACT_APP_API_KEY;

    const onToken = token => {
        axios({
            url: 'payment',
            method: 'post',
            data: {
                amount: priceForStripe,
                token
            }
        }).then(resp => {
            alert('Payment successful')
        }).catch(err => {
            console.log('Payment error', JSON.parse(err));
            alert('There was an issue with your payment. Please sure you use the provided credit card!')
        })
    };

    return (
        <StripeCheckout
            label={'Pay Now'}
            name={'CRWN Clothing Ltd.'}
            billingAddress
            shippingAddress
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel={'Pay Now'}
            token={onToken}
            stripeKey={publishableKey}
        />
    )
};

export default StripeCheckoutButton;
