import { Component } from '@angular/core';
import {UserService} from "../../../service/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  constructor(private userService:UserService, private router:Router) {
  }

  profile:string=this.userService.getProfile()|| "";
  usedName:string=this.userService.getUsedName();

  logout(){
    this.userService.logout();
    this.router.navigate(['/login']);
  }

}
