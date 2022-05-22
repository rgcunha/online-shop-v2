import { Controller, Get } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductSearchDto } from './dto/product-search.dto';
import { ProductMapper } from './product.mapper';

@Controller('/api/products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  async search(): Promise<ProductSearchDto> {
    const products = await this.productService.findAll();
    return {
      count: products.length,
      results: products.map(ProductMapper.toDto),
    };
  }
}
