//virtual object to describe users ("schema")
export interface Child {
  name: string,
  age: number
}
export interface User {
  id: number,
  name: string,
  checkedIn: boolean,
  checkedInDate? : number,
  children?: Child[]
}
