
import axios from 'axios'
import React, {useState, useEffect} from "react";
import Loader from '../Loader';
import ProductCart from './ProductCart';





function ProductsList() {

  const url  ='https://vinylalocamusic.herokuapp.com/api/products';
  const [products,setProducts] = useState({
    loading :false,
    data: null,
    error : false
  })
  let content = null;

  useEffect(()=> {
    setProducts({
      loading:true,
      data:null,
      error : false
    })
    axios.get(url)
    .then(response => {
      console.log(response.data.['hydra:member'])
      setProducts({
        loading:false,
        data: response.data.['hydra:member'],
        error : false
      })
    })
    .catch(()=> {
      setProducts({
        loading:false,
        data: null,
        error : true
      })
    })

  },[url])



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
          <div key ={product.id}>
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


{/* <div className="flex flex-col justify-between " key= {id}>
<img className="m-1 w-24 h-24  mx-auto" src={product.vignette} alt="exemple vignette"></img>
  <p>{product.name}</p>
</div> */}