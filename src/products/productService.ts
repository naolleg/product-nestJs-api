import { Injectable } from "@nestjs/common";
import { product } from "./product.model";

@Injectable()
export class productService{

products:product[]=[];
insertproduct(title:string,name:string,price:number){
    const prodId=new Date().toString();
    const newProduct = new product(prodId,title,name,price)
    this.products.push(newProduct);
    return prodId;
}
}