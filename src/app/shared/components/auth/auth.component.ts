import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IloginUser, IregisterUser } from '../../models/auth';
import { AuthService } from '../../services/auth.service';
import { SnackBarService } from '../../services/snack-bar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  signUpForm !: FormGroup
  loginForm !: FormGroup
  allReadyHasAccount : boolean = false
  hidePassword : boolean = true

  constructor(
    private _authService : AuthService,
    private _snackBar : SnackBarService,
    private _router : Router
  ) { }

  ngOnInit(): void {
    this.createSignUpForm()
    this.createLoginForm()
  }

  togglePasswordVisibility(){
    this.hidePassword = !this.hidePassword
  }

  createSignUpForm(){
    this.signUpForm = new FormGroup({
      email : new FormControl(null, [Validators.required]),
      password : new FormControl(null, [Validators.required]),
      userRole : new FormControl('admin', [Validators.required])
    })
  }

   createLoginForm(){
    this.loginForm = new FormGroup({
      email : new FormControl(null, [Validators.required]),
      password : new FormControl(null, [Validators.required])
    })
  }

  onSignUP(){
    if(this.signUpForm.invalid){
      this.signUpForm.markAllAsTouched()
    }else{
      let userDetails : IregisterUser =  this.signUpForm.value
      
      this._authService.signUp(userDetails)
        .subscribe({
          next : res => {
            console.log(res);     
            this.signUpForm.reset()   
            this._snackBar.openSnackBar(res.message)
            this.allReadyHasAccount = true
          },
          error : err => {
            console.log(err);
            this._snackBar.openSnackBar(err.error.message)  
          }
        })
    }
  }

  onLogin(){
    if(this.loginForm.invalid){
      this.loginForm.markAllAsTouched()
    }else{
      let userDetails : IloginUser = this.loginForm.value

      this._authService.login(userDetails)
          .subscribe({
            next : data => {
              console.log(data);
              this.loginForm.reset()
              this._snackBar.openSnackBar(data.message)
              this._authService.saveToken(data.token)
              this._authService.saveUserRole(data.userRole)
              this._router.navigate(['home'])
            },
            error : err => {
              console.log(err);
              this._snackBar.openSnackBar(err)
            }
          })
    }
  }

}
