import {Component, Input} from '@angular/core';
import {Product} from "../product";

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  @Input() products: Product[];
}
