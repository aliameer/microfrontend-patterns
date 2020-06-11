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
    document.getElementById('carts')
      .dispatchEvent(
        new CustomEvent('add-product-to-cart', { detail: product })
      );
  }
}
