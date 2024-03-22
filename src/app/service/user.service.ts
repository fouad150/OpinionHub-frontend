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

  register(formData:FormData): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/register`, formData)
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

  saveUsedName(usedName:string){
    this.cookieService.set('usedName',usedName);
  }

  saveRole(role:string){
    this.cookieService.set('role',role);
  }

 /* saveProfile(profile:string){
    this.cookieService.set('profile',profile);
  }*/

  saveProfile(profile: string): void {
    localStorage.setItem('profile', profile); // Save the base64 image in local storage
  }
  getProfile(): string | null {
    return localStorage.getItem('profile'); // Retrieve the base64 image from local storage
  }

  getJwtFromCookies():string {
    return this.cookieService.get('jwt-cookie');
  }

  getUsedName():string {
    return this.cookieService.get('usedName');
  }

  getRoleFromCookies(): string {
    return this.cookieService.get('role');
  }
  getEmailCookies(): string {
    return this.cookieService.get('email');
  }
  /*getProfileFromCookies(): string {
    return this.cookieService.get('profile');
  }*/

}
