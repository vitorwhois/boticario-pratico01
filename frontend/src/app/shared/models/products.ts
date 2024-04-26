export class Product {
  id!: string;
  name!: string;
  price!: number;
  tags?: string[];
  favorite?: boolean;
  stars?:number;
  imageUrl!: string;
  collection!: string[];
}
