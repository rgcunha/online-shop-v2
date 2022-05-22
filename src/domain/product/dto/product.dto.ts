export enum Badge {
  SALE = 'sale',
  NEW = 'new',
}

export class ProductDto {
  readonly name: string;
  readonly description: string;
  readonly price: number;
  readonly discount: number;
  readonly validFrom: string;
  readonly validUntil: string;
  readonly img: string;
  readonly badge: Badge | null;
}
