import React  from 'react';
import '../styles/product.css'
import { Link } from 'react-router-dom';
// import Quantity from './Quantity';

function Cart(props) {
  const {cartItems,addToCart,removeFromCart} = props;
  const itemsPrice = cartItems.reduce((a,c)=>a+c * c.qty,0);
  const taxPrice =itemsPrice * 0.21;


    return (
      
      <div className="flex flex-row justify-center flex-wrap ">
        {cartItems.length === 0 && <div>Cart is empty</div>}
        {cartItems.map((item) =>
        <div>
            <div key ={item.id} className="" >
            <div className="flex flex-row justify-start items-center flex-wrap ">
                 <img className="pochette my-8 mr-4" src={item.data.vignette} alt="exemple vignette"></img>
                  <div><h2 className="flex self-start font-bold  text-2xl mb-2">{item.data.name}</h2>
                  <h3  className="flex self-start font-bold text-xl mb-4 ">{item.data.artist}</h3>
                  </div>
        <button  className="">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
               </button>
                </div>
                </div>
                <div className="flex w-full justify-between pl-24 mb-2 ">
                <div className="flex justify-start">
                <button  onClick={()=>removeFromCart(item)} className="btn-quantity">-</button>
                  <div className="flex items-center px-2">{item.qty} </div>
                  <button  onClick={() => addToCart(item)} className="btn-quantity">+</button>
                </div>
                  <p className="price font-bold text-xl">{item.data.price.toFixed(2)} €</p>
              </div>
  
            
            
            
          </div>
          
        
        
      )}
      <div className="label-cat mt-4 w-full flex px-6 justify-between items-center">
              <h3 className="font-bold text-xl ">TOTAL</h3>
              <p className="price font-bold text-xl">€</p>
              </div>
      
      <div className="">
                <button className="shop-btn w-full font-bold py-2 px-4 my-4 rounded">
                  <Link to ="/">CONTINUE YOUR SHOPPING</Link></button>
                <button className="check-btn  w-full text-white font-bold py-2 px-4 rounded">CHECKOUT</button>
          </div>
      </div>
    )
  }

  
  export default Cart