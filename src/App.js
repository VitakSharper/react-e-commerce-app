import React from 'react';
import {Switch, Route, Link} from 'react-router-dom'
import './App.scss';
import HomePage from "./pages/home/home.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUp from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";

function App() {
    return (
        <div>
            <Header/>
            <Switch>
                <Route path='/' component={HomePage} exact/>
                <Route path='/shop' component={ShopPage}/>
                <Route path='/signin' component={SignInAndSignUp}/>
            </Switch>
        </div>
    );
}

export default App;
