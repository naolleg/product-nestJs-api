import { Controller, Post, Body } from '@nestjs/common';
import { productService } from './productService';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: productService) {}

  @Post()
  addProduct(
    @Body('title') prodTitle: string,
    @Body('price') prodPrice: number,
    @Body('name') prodName: string,
  ): any {
    
    const id = this.productService.insertProduct(prodName, prodTitle, prodPrice);

    return { id: id };
    // This endpoint adds a new product to the database
  }
}
