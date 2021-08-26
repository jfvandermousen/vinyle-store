//Product.js

import React, {useState, useEffect} from "react";
import { AxiosGetSingleProd } from '../../Hooks/HttpSingleProd';

import Player from './Player';
import Loader from '../Loader';
import { Link, useParams } from 'react-router-dom';


function Product(props) {
  const {addToCart} = props;

  const {id} = useParams()
  const url  =`https://vinylalocamusic.herokuapp.com/api/products/${id}`;

  let product = AxiosGetSingleProd(url)

    let content = null;
  if(product.error) {
    content = <p> Refresh or try again </p>
  }

  if(product.loading) {
    content = <Loader />
  }

    if(product.data) {
      content = 
      
        <div className="flex justify-center mb-4">
        <div className="card flexflex-col justify-center items-center ">

          <img className="my-8" src={product.data.vignette} alt="exemple vignette"></img>
          <h2 className="flex self-start font-bold  text-2xl mb-2">{product.data.name}</h2>
          <h3  className="flex self-start font-bold text-xl mb-4 ">{product.data.artist}</h3>
          <div className="label-cat mb-8 w-full flex  justify-between">
              <p>{product.data.label}</p>
              <p>{product.data.categories}</p>
          </div>
          <h4 className="self-start font-bold  text-left ">Description</h4>
          <p className="font-italic text-left mb-4">{product.data.description} </p>
          <div className="label-cat my-8 w-full flex  justify-between items-center">
                  <p className="price font-bold text-xl">{product.data.price}€</p>
                  <button onClick={()=> addToCart(product)}   className="add-btn text-white font-bold py-2 px-4 rounded">
                   <Link to ="/cart">ADD TO CART</Link> </button>
          </div>
          <Player />
         

          </div>
        </div>

      
    }

    return (
        <div>
            {content}

        </div>

          

    )
  };
  
  export default Product;