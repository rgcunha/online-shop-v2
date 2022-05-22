import { ProductDto } from './product.dto';

export class ProductSearchDto {
  readonly count: number;
  readonly results: ProductDto[];
}
