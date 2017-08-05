import { Component } from '@angular/core';
import { NgModule }             from '@angular/core';
import { UserService } from '../../auth/user.service';
@Component({
  selector: 'app-header',
  templateUrl:'./header.component.html'
})

export class HeaderComponent  {
  user = '';
constructor (userService:UserService )
{
  this.user  = userService.userName ;
}
}
