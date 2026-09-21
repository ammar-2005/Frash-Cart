'use server'

import { getTokenFun } from "@/app/ulilities/getTokenData"

export async function removeAddress(addressId:string) {
  
    const token = await getTokenFun()
    if(!token){
        throw new Error("Unauthorized")
    }

    // call api
    try {
        const res =  await fetch(`https://ecommerce.routemisr.com/api/v1/addresses/${addressId}` ,{
            method:'DELETE' ,
            headers:{
                token : token ,
                   "Content-Type": "application/json",
            },


        })


        if(!res.ok){
             throw new Error("Unauthorized")
        }

        return await res.json()
    } catch (error) {
         throw new Error("Unauthorized")
    }
}
