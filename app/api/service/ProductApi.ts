import { promises } from "dns"
import { ProductType } from "../types/ProductType"

  export async function getAllProduct() : Promise< ProductType[]>{
    try{
    const res = await fetch('https://ecommerce.routemisr.com/api/v1/products') 
    if(!res.ok) throw new Error('API Error')
   const payload = await res.json()
     return payload.data 

    }catch(error){
       throw new Error('API Error')
    }
  
  }
  // call api for single product

   export async function getSingleProduct(prodId : string) :Promise<ProductType>{
        
    try{
      const res = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${prodId}`)
     if(!res.ok) throw new Error('API Error')
   const payload = await res.json()
     return payload.data 
    }catch(error){
      throw new Error('API Error')
    }

  }