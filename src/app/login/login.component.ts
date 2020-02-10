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
    if( localStorage.getItem('token') ) {
      this.router.navigate(['/']);
    }
  }

  async signInWithGoogle() {
    await this.authService.signIn(GoogleLoginProvider.PROVIDER_ID).then((response) => {      
      if(response) {
        this.api.login(response).subscribe(result => {
          if(result) {                     
            localStorage.setItem('token', response.authToken);                       
            this.router.navigate(['/']);
          }
          else {
            this.authService.signOut();
            alert('Não foi possível autenticar-se, por favor, tente novamente');
          }
        }, error => {
          console.log(error.message);
       });       
      }
    }, error => {
      console.log(error.message);
    });
  }

}
