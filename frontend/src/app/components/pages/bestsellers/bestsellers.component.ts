import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/shared/models/products';

@Component({ 
  selector: 'app-bestsellers',
  templateUrl: './bestsellers.component.html',
  styleUrls: ['./bestsellers.component.css']
})
export class BestsellersComponent implements OnInit {
  produtcs:Product[] = [];
  constructor(private produtcService:ProductService, activatedRoute:ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      if(params.searchTerm)
      this.produtcs = this.produtcService.getAllProductsBySearchTerm(params.searchTerm);
      else
      this.produtcs =produtcService.getAll();
    })

   }


  ngOnInit(): void {}

}
