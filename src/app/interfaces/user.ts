import { Address } from "./address"
import { Company } from "./company"

export interface User {
  // id: number - make optional
  id?: number
  name: string
  username: string
  imagePath?:string
  email: string
  address: Address
  phone: string
  website: string
  company: Company
  isAdmin?:boolean
}
