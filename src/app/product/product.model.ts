export interface Product{
    id:number,
    name:string,
    description:string,
    productUrl:string,
    price:number
}
export interface IResult<T> {
    succeeded: boolean;
    message: string[];
    data: T | T[];
  }