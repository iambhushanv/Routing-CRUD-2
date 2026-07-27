import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { finalize, Observable } from 'rxjs';
import { SpinnerService } from './spinner.service';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {
  private _spinnnerService = inject(SpinnerService)

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this._spinnnerService.emitSpinnerFlag(true)
    if(req.url.includes('login') || req.url.includes('signup')){
      return next.handle(req).pipe(
        finalize( () => {
          this._spinnnerService.emitSpinnerFlag(false)
        })
      )
    }

    const reqClone = req.clone({
      setHeaders : {
        "content-Type" : "application/json",
        "auth" : 'Token from LS'
      }
    })
    return next.handle(reqClone).pipe(
      finalize( () => {
          this._spinnnerService.emitSpinnerFlag(false)
        
      })
    )
  }
}
