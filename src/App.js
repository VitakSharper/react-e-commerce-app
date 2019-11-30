import React from 'react';
import {Switch, Route, Link} from 'react-router-dom'
import './App.scss';
import HomePage from "./pages/homepage/homepage.component";


function App() {
    return (
        <div>
            <Switch>
                <Route path='/' component={HomePage} exact/>
            </Switch>
        </div>
    );
}

export default App;
