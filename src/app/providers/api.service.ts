import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { API_URL } from '../appsettings';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  buscaArtistas(artista): Observable<any> {
    const params = new HttpParams()
    .set('artista', artista);

    return this.http.get(`${API_URL}/busca`, {params});
  }

  getArtista(id): Observable<any> {
    return this.http.get(`${API_URL}/artista/${id}`);
  }

  historico(): Observable<any> {
    return this.http.get(`${API_URL}/historico`);
  }

  saveHistorico(artista): Observable<any> {
    let body = new FormData();
    body.append('id', artista.id);
    
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'x-www-form-urlencoded');
    return this.http.post(`${API_URL}/save-historico`, body, { headers: headers });
  }

  login(user): Observable<any> {
    let body = new FormData();
    body.append('id', user.id);
    body.append('name', user.name);
    body.append('token', user.authToken);

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'x-www-form-urlencoded');
    return this.http.post(`${API_URL}/login`, body, { headers: headers });
  }
  
}
