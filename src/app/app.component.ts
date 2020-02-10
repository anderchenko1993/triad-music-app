import { Component } from '@angular/core';
import { AuthService } from "angularx-social-login";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'triad-music-app';
  logged: boolean;

  constructor(private authService: AuthService) { 
    this.authService.authState.subscribe((user) => {
      if(user) {
        this.logged = true;
      }     
      else 
      this.logged = false; 
    });
  }

}
