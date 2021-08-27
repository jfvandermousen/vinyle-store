import  {useState, useEffect} from "react";
import axios from 'axios'

export function AxiosGetSingleProd(url){
    const [product,setProduct] = useState({
        loading :false,
        data: null,
        error : false
      })
    
    
    
      useEffect(()=> {
        setProduct({
          loading:true,
          data:null,
          error : false
        })
        axios.get(url)
        .then(response => {
          console.log(response.data);

          setProduct({
            loading:false,
            data: response.data,
            error : false
          })
        })
        .catch(()=> {
          setProduct({
            loading:false,
            data: null,
            error : true
          })
        })
    
      },[url])

            return product
}
