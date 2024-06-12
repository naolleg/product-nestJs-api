import { Module } from '@nestjs/common'
import { productController } from "./product.controller";
import { productService } from "./productService";

@Module({
    controllers:[productController],
    providers:[productService]
})
export class productModule{}