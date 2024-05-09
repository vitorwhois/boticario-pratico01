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
  getAllProductsBySearchTerm(searchTerm: string){
    return this.getAll().filter(product => product.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  getProductById(productId: string): Product {
    return this.getAll().find(product => product.id === productId) ?? new Product();
  }
}
