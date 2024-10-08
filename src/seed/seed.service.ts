import { ProductsService } from './../products/products.service';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SeedService {
  constructor(private readonly productsService: ProductsService) {}
  async runSeed() {
    await this.insertNewProducts();
    return 'Seed Executed';
  }

  private async insertNewProducts() {
    await this.productsService.deleteAllProducts();
    return true;
  }
}
