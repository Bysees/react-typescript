export interface ICompany {
  name: string
  catchPhrase: string
}

export interface IAddress {
  street: string
  city: string
}

export interface IUser {
  id: number
  name: string
  email: string
  address: IAddress
  company: ICompany
}

export interface ITodo {
  id: number
  title: string
  completed: boolean
}