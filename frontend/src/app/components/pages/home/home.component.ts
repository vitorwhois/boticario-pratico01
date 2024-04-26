import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/shared/models/products';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  produtcs:Product[] = [];
  constructor(private produtcService:ProductService) {
    this.produtcs =produtcService.getAll();
   }

  ngOnInit(): void {}

}
