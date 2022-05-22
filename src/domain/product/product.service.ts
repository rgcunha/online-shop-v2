import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product, ProductDocument } from './product.schema';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel(Product.name) private productModel: Model<ProductDocument>,
  ) {}

  // async create(createProductDto: CreateProductDto): Promise<Product> {
  //   const createdProduct = new this.productModel(createProductDto);
  //   return createdProduct.save();
  // }

  async findAll(): Promise<Product[]> {
    const products = await this.productModel.find();
    return products;
  }
}
