import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../product";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent implements OnInit {
  @Input() product: Product;

  constructor() { }

  ngOnInit(): void {
  }

  onAddToCart(product: Product) {
    console.log('add to cart: ', product);
  }
}
