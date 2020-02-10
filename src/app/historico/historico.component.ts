import { Component, OnInit } from '@angular/core';

import { ApiService } from '../providers/api.service';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})
export class HistoricoComponent implements OnInit {

  historico: any;

  constructor(private api: ApiService) { }

  ngOnInit() {
    this.buscaHistorico();
  }

  async buscaHistorico() {
    await this.api.historico().subscribe(historico => {
      this.historico = historico;        
    }, error => {
      alert(error.message);
    });
  }



}
