import { Component, OnInit } from '@angular/core';

import { ProductService } from '../product.service';

@Component({
  selector: 'product-list',
  templateUrl: './app/products/product-list/product-list.component.html'
})
export class ProductListComponent implements OnInit {
  products:Product[]=[];

  constructor(private productService:ProductService) {
      
  }

  ngOnInit() {
      this.products = this.productService.getProducts();
  }

}



