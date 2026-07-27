import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Iuser } from '../../models/user';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-users-dash',
  templateUrl: './users-dash.component.html',
  styleUrls: ['./users-dash.component.scss']
})
export class UsersDashComponent implements OnInit {

  userId !: string
  userDetails !: Iuser
  getUserArr !: Array<Iuser>

  constructor(
    private _userService : UserService,
    private _router : Router,
    private _route : ActivatedRoute,
    private _authService : AuthService
  ) { }

  ngOnInit(): void {
    this.fetchUsers()
  }

  fetchUsers(){
   this._userService.fetchUsers()
   .subscribe({
    next : res => {
      this.getUserArr = res
      if(this.getUserArr.length > 0 && this._authService.getToken()){
        this._router.navigate(['/users', this.getUserArr[0].userId],
           {queryParams : {ur : this.getUserArr[0].userRole}}
          )
      }
    },
    error : err => {
      console.log(err);     
    }
   })
  }

  trackByFun(index : number, user: Iuser){
    return user.userId
  }

   

}
