import React from 'react'
import { Link } from 'react-router-dom'


const ProductCart = (props) => {
    return (

        <Link to={`/product/${props.product.id}`}> 
        <img className="m-1  mx-auto p-2" src={props.product.vignette} alt="exemple vignette"></img>
  </Link>
    )
}

export default ProductCart
