import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import Product from './Product';
import Cart from './Cart';


const Components = () => {
    return(
        <Router>
            <Route exact path="/" component= {Home} />
            <Route path = "/Product" component = {Product} />
            <Route path = "/Cart" component = {Cart} />
        </Router>
    );
};

export default Components;