import React from 'react';
import '../styles/product.css'
import { Link } from 'react-router-dom';
// import Quantity from './Quantity';

function Product() {


    return (
      <div className="flex justify-start px-8">
          <div className=" card card-page flex flex-col items-start ">
            <div className="flex w-full ">

              <div className="flex w-full ">
              <img className="pochette my-8 mr-4" src="" alt="exemple vignette"></img>
              <div className="flex flex-col justify-center items-center ">
                <h2 className="self-start font-bold  text-2xl "></h2>
                <h3  className="self-start font-bold text-xl mb-4 "></h3>
              </div>
              </div>
              <button className="">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              </div>
              <div className="flex w-full justify-between pl-24 mb-2 ">
                <div className="flex justify-start">
                  <button className="btn-quantity">-</button>
                  <input  className="input-quantity" type="text" value="0"></input>
                  <button className="btn-quantity">+</button>
                </div>
                  <p className="price font-bold text-xl">€</p>
              </div>

            
            <div className="label-cat mt-4 w-full flex  justify-between items-center">
              <h3 className="font-bold text-xl ">TOTAL</h3>
              <p className="price font-bold text-xl">€</p>
              </div>
            <div className="">
                <button className="shop-btn w-full font-bold py-2 px-4 my-4 rounded">
                  <Link to ="/">CONTINUE YOUR SHOPPING</Link></button>
                <button className="check-btn  w-full text-white font-bold py-2 px-4 rounded">CHECKOUT</button>
          </div>
          </div>

      </div>
    );
  }
  
  export default Product;