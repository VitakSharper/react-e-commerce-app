import React, {useEffect} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'

import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";

import './App.scss';

import Header from "./components/header/header.component";
import HomePage from "./pages/home/home.component";
import ShopPage from "./pages/shop/shop.component";
import CheckoutPage from "./pages/checkout/checkout.component";

import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

import {checkUserSession} from "./redux/user/user.actions";
import {selectCurrentUser} from "./redux/user/user.selectors";

const App = ({currentUser, checkUserSession}) => {

    useEffect(() => {
        checkUserSession();
    }, [checkUserSession]);

    return (
        <div>
            <Header/>
            <Switch>
                <Route path='/' component={HomePage} exact/>
                <Route path='/shop' component={ShopPage}/>
                <Route path='/checkout' component={CheckoutPage}/>
                <Route exact ath='/signin'
                       render={() => currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUp/>)}/>
            </Switch>
        </div>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
