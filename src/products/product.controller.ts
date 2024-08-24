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
    // Call the insertProduct method of the productService
    const id = this.productService.insertProduct(prodName, prodTitle, prodPrice);
    // Return the generated ID
    return { id: id };
    // This endpoint adds a new product to the database
  }
}
