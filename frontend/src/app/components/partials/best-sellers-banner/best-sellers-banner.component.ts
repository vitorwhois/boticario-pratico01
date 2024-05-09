import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/shared/models/products';

@Component({
  selector: 'app-best-sellers-banner',
  templateUrl: './best-sellers-banner.component.html',
  styleUrls: ['./best-sellers-banner.component.css']
})
export class BestSellersBannerComponent {
  produtcs:Product[] = [];
  constructor(private produtcService:ProductService) {
    this.produtcs =produtcService.getAll();
   }

  ngOnInit(): void {}

}
