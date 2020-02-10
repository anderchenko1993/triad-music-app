import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './guards/auth.guard'; 
import { HomeComponent } from './home/home.component';
import { BuscaComponent } from './busca/busca.component';
import { ArtistaComponent } from './artista/artista.component';
import { HistoricoComponent } from './historico/historico.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';

const routes: Routes = [
  { path: '', component: HomeComponent, canActivate : [AuthGuard] },
  { path: 'busca',  component: BuscaComponent, canActivate : [AuthGuard] },
  { path: 'artista/:id', component: ArtistaComponent, canActivate : [AuthGuard] },
  { path: 'historico', component: HistoricoComponent, canActivate : [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [HomeComponent, BuscaComponent, ArtistaComponent, HistoricoComponent, LoginComponent, LogoutComponent];
