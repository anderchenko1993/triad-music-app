import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BuscaComponent } from './busca/busca.component';
import { ArtistaComponent } from './artista/artista.component';
import { HistoricoComponent } from './historico/historico.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'busca',  component: BuscaComponent },
  { path: 'artista/:id', component: ArtistaComponent },
  { path: 'historico', component: HistoricoComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, BuscaComponent, ArtistaComponent, HistoricoComponent, LoginComponent];
