import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from "angularx-social-login";
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  user: any;
  status: any;

  constructor(private authService: AuthService, private router: Router) { 
  }

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if( this.isLoggedIn() ) {
      return true;
    }
    else {
      this.router.navigate(['/login']);    
      return false;
    }
  }  

  async isLoggedIn() {
    await this.authService.authState.subscribe((user) => {
      if(user) {
        return true;
      } 
      else {
        this.router.navigate(['/login']);    
        return false;
      }
    });
  }

}
