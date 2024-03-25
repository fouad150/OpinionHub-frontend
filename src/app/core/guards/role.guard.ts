import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from "../../features/login/service/auth.service";
import {RoleEndpointMapping} from "../RoleEndpointMapping";
import {Role} from "../enums/Role";

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const userRole=this.hasRole();

    const requestedEndpoint = state.url.split('?')[0];
    console.log(requestedEndpoint);
    console.log(RoleEndpointMapping[userRole].includes(requestedEndpoint));

    if (userRole && RoleEndpointMapping[userRole].includes(requestedEndpoint)) {
      return true;
    } else {
      // Redirect to unauthorized or access denied page
      alert('access denied');
      return false;
    }
  }

  hasRole():Role{
    if(this.authService.hasRole("ROLE_MANAGER")){
      return Role.MANAGER;
    }else if(this.authService.hasRole("ROLE_JURY")){
      return Role.JURY;
    }else{
      return Role.MEMBER;
    }
  }

}
