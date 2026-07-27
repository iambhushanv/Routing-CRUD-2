import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { IcanActivate } from "../models/canDeactivate";
import { Injectable } from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class CanDeactiveGuard implements CanDeactivate<IcanActivate> {
 
  canDeactivate(component: IcanActivate,
     currentRoute: ActivatedRouteSnapshot, 
     currentState: RouterStateSnapshot,
      nextState?: RouterStateSnapshot):
   Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    return component.canDeactive();
  }
}
