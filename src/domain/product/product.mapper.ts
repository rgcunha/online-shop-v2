import { Product } from './product.schema';
import { ProductDto, Badge } from './dto/product.dto';
import * as moment from 'moment';

export class ProductMapper {
  static toDto(product: Product): ProductDto {
    return {
      name: product.name,
      description: product.description,
      price: product.price,
      discount: product.discount,
      validFrom: product.validFrom.toISOString(),
      validUntil: product.validUntil.toISOString(),
      img: product.imageUrl,
      badge: ProductMapper.calculateBadge(product),
    };
  }

  private static calculateBadge(product: Product): Badge | null {
    if (product.discount) return Badge.SALE;
    if (moment(Date.now()).diff(product.validFrom, 'months') < 3)
      return Badge.NEW;
    return null;
  }
}
