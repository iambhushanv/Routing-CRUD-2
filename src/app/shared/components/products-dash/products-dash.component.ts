import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Iproduct } from '../../models/products';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-products-dash',
  templateUrl: './products-dash.component.html',
  styleUrls: ['./products-dash.component.scss']
})
export class ProductsDashComponent implements OnInit {

  getProductsArr !: Array<Iproduct>
  constructor(
    private _productService: ProductsService,
    private _router: Router,
    private _authService: AuthService,
    private _routes: ActivatedRoute
  ) {
    console.log(_routes);
    this.getProductsArr = _routes.snapshot.data['product']
  }

  ngOnInit(): void {
    // this.fetchProduct()
    if (this.getProductsArr.length > 0 && this._authService.getToken()) {
      this._router.navigate(['/products', this.getProductsArr[0].pid],
        { queryParams: { cr: this.getProductsArr[0].canReturn } })
    }
  }

  // fetchProduct() {
  //   this._productService.fetchProducts()
  //     .subscribe({
  //       next: res => {
  //         this.getProductsArr = res
  //         if (this.getProductsArr.length > 0 && this._authService.getToken()) {
  //           this._router.navigate(['/products', this.getProductsArr[0].pid],
  //             { queryParams: { cr: this.getProductsArr[0].canReturn } })
  //         }
  //       },
  //       error: err => {
  //         console.log(err);
  //       }
  //     })
  // }

  trackByFun(index: number, product: Iproduct) {
    return product.pid
  }

}
