import { Component, OnInit } from '@angular/core';

import { ApiService } from '../providers/api.service';

@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.css']
})
export class BuscaComponent implements OnInit {

  busca: string;
  artistas: any;

  constructor(private api: ApiService) { }

  ngOnInit() { }

  async buscaArtista() {   
    if( this.busca.length > 4) {
      await this.api.callApi(this.busca).subscribe(artistas => {
        this.artistas = artistas;
        console.log(this.artistas);
      }, error => {
        alert(error.message);
      });
    } 
    else {
      this.artistas = [];
    }  
  }

}
