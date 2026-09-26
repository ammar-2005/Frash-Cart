'use server'

import { getTokenFun } from "@/app/ulilities/getTokenData"

type AddAddressPayload = {
    name : string 
    details:string
    phone:string
    city:string
}

export async function addAddress(data: AddAddressPayload) {
  
    const token = await getTokenFun()
    if(!token){
        throw new Error("Unauthorized")
    }

    // call api
    try {
        const res =  await fetch("https://ecommerce.routemisr.com/api/v1/addresses" ,{
            method:'POST' ,
            body:JSON.stringify(data),
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
