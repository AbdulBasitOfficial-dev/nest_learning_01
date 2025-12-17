import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
  private products = [
    { id: 1, name: 'Mobile', prise: 2000 },
    { id: 2, name: 'Mobile2', prise: 2000 },
    { id: 3, name: 'Mobile3', prise: 2000 },
  ];

  getproducts() {
    return this.products;
  }

  getproductById(id: number) {
    return this.products.find((p) => p.id === id);
  }
}
