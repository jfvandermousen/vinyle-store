
import React, {useState, useEffect} from "react";
import Loader from '../Loader';
import ProductCart from './ProductCart';
import { useAxiosGet } from '../../Hooks/HttpReqProducts';





function ProductsList(addToCart) {

  const url  ='https://vinylalocamusic.herokuapp.com/api/products';

  let content = null;
  let products = useAxiosGet(url)

  if(products.error) {
    content = <p> Refresh or try again </p>
  }

  if(products.loading) {
    content = <Loader />
  }

  if(products.data) {
    content = 
    <div className="flex flex-row justify-center flex-wrap ">
    {products.data.map((product) =>
          <div key ={product.id} addToCart ={addToCart}>
              <ProductCart 
              product={product}/>
              </div>
      
    )}

    </div>

   
      }


  return (
    <div>
    {content}
    </div>
  )
}

export default  ProductsList
