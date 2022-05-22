import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ProductDocument = Product & Document;

@Schema()
export class Product {
  @Prop()
  id: number;

  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop()
  price: number;

  @Prop()
  discount: number;

  @Prop()
  imageUrl: string;

  @Prop()
  validFrom: Date;

  @Prop()
  validUntil: Date;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
