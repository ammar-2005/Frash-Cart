
import { Category, Subcategory, Brand } from './CategoryType'; 
export interface CartResponseType{
 status: string
 message: string
numOfCartItems:number
cartId:string
data: Data

}
export interface Data{
 _id: string
 cartOwner: string
products:product[]
createdAt:string
updatedAt:string
__v:number
totalCartPrice:number

}
export interface product{
 count: number
 _id: string
product:product2
price:number
}
export interface product2{
    subcategory: Subcategory[]
    _id: string
    title: string
    slug: string
    quantity: number
    imageCover: string
    category: Category
    brand: Brand
    ratingsAverage: number
    id: string
}