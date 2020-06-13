import {Component, Input} from '@angular/core';
import {Product} from "../product";
import {environment} from "../../environments/environment";

@Component({
  selector: 'product-detail',
  templateUrl: './product-detail.component.html',
})
export class ProductDetailComponent {
  @Input() product: Product;
  dollarSign: String = String.fromCharCode(36);
  apiBaseUrl: String = environment.apiBaseUrl;

  onAddToCart(product: Product) {
    document.getElementById('carts')
      .dispatchEvent(
        new CustomEvent('add-product-to-cart', { detail: product })
      );
  }
}
