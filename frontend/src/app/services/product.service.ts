import { Injectable } from '@angular/core';
import { Product } from '../shared/models/products';
import { sample_products } from 'src/data';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }

  getAll(): Product[] {
    return sample_products;
  }
}
