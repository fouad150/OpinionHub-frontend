import { Component } from '@angular/core';
import {UserService} from "../../../service/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string="";
  password: string="";
  constructor(private userService:UserService, private router:Router) {
  }
  ngOnInit():void{

  }

  login():void{
    this.userService.login(this.email,this.password).subscribe(
      (response) => {
        this.userService.saveToken(response.access_token);
        this.userService.saveEmail(response.email);
        this.userService.saveRole(response.roles[1]);
        this.router.navigate(['/publications']);
      },
      error => {
        console.log(error)
        alert('the email or the password not correct');
      }
    )
  }
}
