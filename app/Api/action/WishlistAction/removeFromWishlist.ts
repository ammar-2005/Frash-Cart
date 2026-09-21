'use server'
import { getTokenFun } from '@/app/ulilities/getTokenData';
export async function removeFromWishlist(prodId : string){

    // call Api
    const token = await getTokenFun()

    if(!token){
        throw new Error ("Unauthorized")
    }
     
  try {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/wishlist/${prodId}` ,{
        method:'DELETE',
        headers:{
            token: token,
                "Content-Type": "application/json",
        }
    })
    if(!res.ok){
        throw new Error("Unauthorized")
    }
    
    return await res.json()



  } catch (error) {
     throw new Error("Unauthorized")
  }


}