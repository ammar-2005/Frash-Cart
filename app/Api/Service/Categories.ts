import { Category } from "../types/ProductType"

 export async function getShopCategory() : Promise<Category[]>{
    try{
         const res = await fetch("https://ecommerce.routemisr.com/api/v1/categories")
         if(!res.ok) throw new Error('API Error')
            const payload = await res.json()
        return payload.data

    }catch(error){
throw new Error('API Error')
    }
   



}