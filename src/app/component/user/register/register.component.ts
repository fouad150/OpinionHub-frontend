import { Component } from '@angular/core';
import {UserService} from "../../../service/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  name:string="";
  username:string="";
  email: string="";
  password: string="";
  constructor(private userService:UserService, private router:Router) {
  }
  ngOnInit():void{

  }

  register():void{
    this.userService.register(this.name,this.username,this.email,this.password,"USER").subscribe(
      (response) => {
        this.userService.saveToken(response.access_token);
        this.userService.saveEmail(response.email);
        this.userService.saveRole(response.roles[1]);
        this.router.navigate(['/publications']);
      },
      error => {
        console.log(error)
        alert(error.error.message);
      }
    )
  }
}
