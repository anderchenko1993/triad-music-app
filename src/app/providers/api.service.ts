import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { API_URL } from '../appsettings';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  busca(artista): Observable<any> {
    return this.http.get(`${API_URL}/busca?artista=${artista}`);
  }

  getArtista(id): Observable<any> {
    return this.http.get(`${API_URL}/artista/${id}`);
  }

  historico(user): Observable<any> {
    return this.http.get(`${API_URL}/historico/${user}`);
  }

  login(user): Observable<any> {
    let body = new FormData();
    body.append('id', user.id);
    body.append('name', user.name);
    body.append('token', user.authToken);

    const headers = new HttpHeaders()
    headers.append('Content-Type', 'x-www-form-urlencoded');
    return this.http.post(`${API_URL}/login`, body, { headers: headers });
  }
  
}
