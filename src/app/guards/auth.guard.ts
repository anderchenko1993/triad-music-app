import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router) { 
  }

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if( localStorage.getItem('user') ) {
      return true;
    }

    this.router.navigate(['/login']);    
    return false;
  }  
}
