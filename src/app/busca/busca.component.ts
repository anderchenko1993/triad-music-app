import { Component, OnInit } from '@angular/core';

import { ApiService } from '../providers/api.service';
import { API_URL } from '../appsettings';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent implements OnInit {

  apiUrl: string = API_URL;
  artistas: any;

  constructor(private api: ApiService) { }

  ngOnInit() { }

  async buscaArtistas(artista) {   
    if( artista.length > 4) {
      await this.api.buscaArtistas(artista).subscribe(artistas => {
        this.artistas = artistas;        
      }, error => {
        alert(error.message);
      });
    } 
    else {
      this.artistas = [];
    }  
  }
}
