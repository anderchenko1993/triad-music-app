import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

import { ApiService } from '../providers/api.service';
import { API_URL } from '../appsettings';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  apiUrl: string = API_URL;
  id: number;
  artista: any;  

  constructor(private activateRoute: ActivatedRoute, private router: Router, 
    private api: ApiService) 
  {
      this.activateRoute.params.subscribe( params => {
        this.id = params['id']; 
        this.getArtista();
      });
  }

  ngOnInit() { }

  async getArtista() {
    await this.api.getArtista(this.id).subscribe(artista => {
      this.artista = artista;
      console.log(this.artista);
    }, error => {
      alert(error.message);
    });
  }


}
