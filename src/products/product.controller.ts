import { Controller, Post ,Body } from "@nestjs/common";
import { productService } from "./productService";

@Controller('products')
export class productController{
    constructor(private readonly productservice:productService){}
   @Post()
    addProduct(
        @Body("title")prodtitle:string,
        @Body("price")prodprice:number,
        @Body("name")prodname:string,
    ):any{

 const id= this.productservice.insertproduct(prodname,prodtitle,prodprice);
  return {id:id}
    }
}