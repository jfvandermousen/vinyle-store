import React, {useState, useEffect} from "react";
// import { MenuContext } from "react-flexible-sliding-menu";
import MenuProvider from "react-flexible-sliding-menu";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './Components/Header';
import Cart from './Components/Cart';
import Home from './Components/Home';
import Product from './Components/Product';
import Menu from './Components/Menu';
import  PostList  from "./Components/PostList";






function App() {

const [products,setProducts] = useState(null)

async function getData() {

  const response = await fetch("https://cors-anywhere.herokuapp.com/https://vinylaloca.herokuapp.com/api/product");
  const data = await response.json();

  // store the data into our books variable
  setProducts(data) ;
}

  return (

    <Router>
          <MenuProvider width="375px" MenuComponent={Menu} animation="push">
      
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
          <Cart />
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/post">
          <PostList />
        </Route>
      </Switch>

    </div>
    </MenuProvider>
    </Router>
  );
}

export default App;
