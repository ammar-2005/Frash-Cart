import { Brand } from "../types/ProductType";

export async function getAllBrands() : Promise <Brand[]>{
    try{
        const res = await fetch('https://ecommerce.routemisr.com/api/v1/brands')
        if(!res.ok) throw new Error('API Error')
        const payload = await res.json()
        return payload.data


    }catch(error){
        throw new Error('API Error')

    }
}
export async function getSingleBrand(id: string): Promise<Brand> {
  try {
    const res = await fetch(`https://ecommerce.routemisr.com/api/v1/brands/${id}`)
    if (!res.ok) {
      console.error('Brand fetch failed:', res.status, res.statusText, id)
      throw new Error(`API Error: ${res.status}`)
    }
    const payload = await res.json()
    return payload.data
  } catch (error) {
    console.error('getSingleBrand error:', error)
    throw error
  }
}

