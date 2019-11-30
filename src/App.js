import React from 'react';
import {Switch, Route, Link} from 'react-router-dom'
import './App.scss';
import HomePage from "./pages/home/home.component";
import ShopPage from "./pages/shop/shop.component";


function App() {
    return (
        <div>
            <Switch>
                <Route path='/' component={HomePage} exact/>
                <Route path='/shop' component={ShopPage}/>
            </Switch>
        </div>
    );
}

export default App;
