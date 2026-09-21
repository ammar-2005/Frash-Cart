export interface Address {
  _id: string
  name: string
  details: string
  phone: string
  city: string
}

export interface AddressesResponseType {
  results: number
  data: Address[]
}