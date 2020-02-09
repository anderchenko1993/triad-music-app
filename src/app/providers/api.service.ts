import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_URL } from '../appsettings';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  // callApi(): Observable<any> {
  //   return this.http.get(`${API_URL}/busca?artista=${artista}`);
  // }

  busca(artista): Observable<any> {
    return this.http.get(`${API_URL}/busca?artista=${artista}`);
  }

  getArtista(id) {
    return this.http.get(`${API_URL}/artista/${id}`);
  }


  
}
