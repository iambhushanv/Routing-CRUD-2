import { ChangeDetectorRef, Component, inject, OnInit } from '@angular/core';
import { SpinnerService } from './shared/services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Routing-CRUD-2';

  loadingSpinner: boolean = false

  private _cdr = inject(ChangeDetectorRef)
  private _spinnerService = inject(SpinnerService)

  ngOnInit(): void {
    this._spinnerService.spinnerObs$.subscribe(res => {
      this.loadingSpinner = res
    })
  }

}
