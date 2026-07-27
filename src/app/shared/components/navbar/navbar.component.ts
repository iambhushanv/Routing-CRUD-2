import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { SnackBarService } from '../../services/snack-bar.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(
    private _authService : AuthService,
    private _snackBar : SnackBarService,
    private _router : Router
  ) { }

  ngOnInit(): void {
  }

  onLogOut(){
    this._authService.logOut()
      .subscribe({
        next : res => {
          this._snackBar.openSnackBar(res.msg)
          this._router.navigate([''])
        },
        error : err => {
          console.log(err);  
          this._snackBar.openSnackBar(err)
        }
      })
  }

}
