import { Component, OnInit } from '@angular/core';
import { AuthService } from "angularx-social-login";
import { GoogleLoginProvider } from "angularx-social-login";
import { Router } from '@angular/router';

import { ApiService } from '../providers/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: any;
  loggedIn: boolean;

  constructor(private authService: AuthService, private router: Router,
    private api: ApiService) { }

  ngOnInit() {
    if( localStorage.getItem('user') ) {
      this.router.navigate(['/']);
    }
  }

  async signInWithGoogle() {
    await this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((response) => {
      console.log(response);
      if(response) {
        this.api.login(response).subscribe(result => {
          if(result) {
            localStorage.setItem('user', response.id);            
            this.router.navigate(['/']);
          }
        }, error => {
          alert(error.message);
       });
       
      }
    }, error => {
      alert(error.message);
    });
  }

}
