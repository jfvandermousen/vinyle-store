
import {useState} from "react";
import MenuProvider from "react-flexible-sliding-menu";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Cart from './Components/Cart';
import Home from './Components/Home';
import Product from './Components/Product/Product';
import Menu from './Components/Menu';
import  ProductsList from "./Components/Product/ProductsList";
import './styles/product.css';






function App() {


  const [cartItems,setCartItems] =  useState([]);



  return (
    <div className='relative'>
    <Router>
          <MenuProvider width="450px" MenuComponent={Menu} animation="push">
      
    <div className="App">
      <Header />
    </div>

    <div className="content">
      <Switch>
        <Route exact path="/">
          <Home  />
        </Route>
        <Route exact path="/menu">
          <Menu />
        </Route>
        <Route path="/cart">
          <Cart  cartItems={cartItems}/>
        </Route>
        <Route path="/product/:id">
          <Product />
        </Route>
        <Route path="/productslist">
          <ProductsList   />

        </Route>
      </Switch>

    </div>
    </MenuProvider>
    </Router>
    </div>
  );
}

export default App;
