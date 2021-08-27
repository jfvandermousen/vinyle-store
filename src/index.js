import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import MenuProvider from 'react-flexible-sliding-menu';
import Menu from './Components/Menu';

//remove html tags from a string, leaving only the inner text
function removeHTML(str){ 
  var tmp = document.createElement("DIV");
  tmp.innerHTML = str;
  return tmp.textContent || tmp.innerText || "";
}
var desc = document.getElementById('desc')
 removeHTML(desc); 

ReactDOM.render(
  <BrowserRouter>
    <MenuProvider  MenuComponent={Menu} animation="push">
      <App />
    </MenuProvider>
  </BrowserRouter>,
  document.getElementById("root")
);
