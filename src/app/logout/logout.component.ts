import { Component, OnInit } from '@angular/core';
import { AuthService } from "angularx-social-login";
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  template: `
  `,
  styles: []
})
export class LogoutComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) {
    this.authService.signOut().then((response) => {
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    });
  }

  ngOnInit() { }

}
