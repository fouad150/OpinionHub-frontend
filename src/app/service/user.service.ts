import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private apiUrl = 'http://localhost:8080/api/v1/auth';

  constructor(private http:HttpClient, private cookieService:CookieService) {
  }

  register(name:string, username:string,email: string, password: string,role:string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, { name,username,email, password,role})
  }

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/authenticate`, { email, password })
  }

  saveToken(token: string): void {
    this.cookieService.set('jwt-cookie', token);
  }

  saveEmail(email:string){
    this.cookieService.set('email',email);
  }

  saveRole(role:string){
    this.cookieService.set('role',role);
  }

  getJwtFromCookies():string {
    return this.cookieService.get('jwt-cookie');
  }

  getRoleFromCookies(): string {
    return this.cookieService.get('role');
  }
  getEmailCookies(): string {
    return this.cookieService.get('email');
  }

}
