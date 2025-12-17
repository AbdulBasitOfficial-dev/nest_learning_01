import { Controller, Get, Param } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  getProduct() {
    return this.productService.getproducts();
  }

  @Get(':id')
  getproductById(@Param('id') id: string) {
    return this.productService.getproductById(Number(id));
  }
}
