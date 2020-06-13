import { Component } from '@angular/core';
import {Product} from "./product";
import {ProductService} from "./product.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  prods: Product[];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(products => this.prods = products);
  }
}
