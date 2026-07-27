import { inject, Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { ProductsService } from './products.service';
import { Iproduct } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsResolver implements Resolve<Iproduct[]> {
  private _productService = inject(ProductsService)

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Iproduct[]> {
    return this._productService.fetchProducts();
  }
}
