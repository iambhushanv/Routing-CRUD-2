import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SpinnerService {

loadingSpinner$ : BehaviorSubject<boolean> = new BehaviorSubject(false)
 
spinnerObs$ = this.loadingSpinner$.asObservable()

emitSpinnerFlag(flag: boolean){
  this.loadingSpinner$.next(flag)
}

  constructor() { }

}