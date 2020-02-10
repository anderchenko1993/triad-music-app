import { Component } from '@angular/core';
import { AuthService } from "angularx-social-login";
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'triad-music-app';

  constructor(private authService: AuthService, private router: Router) { }

  signOut(): void {
    this.authService.signOut().then((response) => {
      this.router.navigate(['/login']);
    });
  }

}
