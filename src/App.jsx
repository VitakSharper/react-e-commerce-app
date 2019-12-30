import React, {useEffect, lazy, Suspense} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom'

import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";

import Header from "./components/header/header.component";
import Spinner from "./components/spinner/spinner.component";

import {checkUserSession} from "./redux/user/user.actions";
import {selectCurrentUser} from "./redux/user/user.selectors";

import {GlobalStyle} from "./global.styles";
import ErrorBoundary from "./components/error-boundary/error-boundary.component";

const HomePage = lazy(() => import('./pages/home/home.component'));
const ShopPage = lazy(() => import('./pages/shop/shop.component'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout.component'));
const SignInAndSignUp = lazy(() => import('./pages/sign-in-and-sign-up/sign-in-and-sign-up.component'));


const App = ({currentUser, checkUserSession}) => {

    useEffect(() => {
        checkUserSession();
    }, [checkUserSession]);

    return (
        <div>
            <GlobalStyle/>
            <Header/>
            <Switch>
                <ErrorBoundary>
                    <Suspense fallback={<Spinner/>}>
                        <Route exact path='/' component={HomePage}/>
                        <Route path='/shop' component={ShopPage}/>
                        <Route path='/checkout' component={CheckoutPage}/>
                        <Route exact path='/signin'
                               render={() => currentUser ? (<Redirect to='/'/>) : (<SignInAndSignUp/>)}/>
                    </Suspense>
                </ErrorBoundary>
            </Switch>
        </div>)
};


const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
