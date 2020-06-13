import { Injectable } from '@angular/core';
import {Product} from "./product";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import { environment } from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productsUrl = `${environment.apiBaseUrl}/catalogue`;

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productsUrl);
  }
}
