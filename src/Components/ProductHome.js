
// import vignette from '../assets/vignette.jpg';
import React, {useState, useEffect} from "react";



function ProductHome() {

  const [products,setProducts] = useState()

  useEffect(()=> {
    getData();
  
  
    async function getData() {
      
      // const response = await fetch("https://cors-anywhere.herokuapp.com/https://vinylaloca.herokuapp.com/api/product");
      const response = await fetch("https://jsonplaceholder.typicode.com/photos")
      const data = await response.json();
    
      // store the data into our books variable
      setProducts(data) ;
    }
  },[]);


  return (
  <div >
    {products && (
      <div className="grid grid-flow-col grid-cols-2 grid-rows-2 gap-4 mt-8   sm:grid-flow-row  sm:grid-cols-4 mt-8 " >
        {products.map((product, id) => (

            <img key= {id} className="item m-1 w-40 h-40 " alt="record cover"  src={product.thumbnailUrl} ></img>


        ))}

      </div>
    )}
</div>
    
      
      




  )
}

export default  ProductHome

            
// <img alt="record cover"  src={vignette} className="item m-1 w-40 h-40 "></img>
// <img alt="record cover" src={vignette} className="item m-1 w-40 h-40 "></img>
// <img alt="record cover" src={vignette} className="item m-1 w-40 h-40 "></img>