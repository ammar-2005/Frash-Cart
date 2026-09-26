import { ProductType } from "./ProductType"
 
export interface WishlistResponseType {
  status: string
  count: number
  data: ProductType[]
}
 