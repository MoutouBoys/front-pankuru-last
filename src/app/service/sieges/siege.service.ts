import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SiegeService  {
  public baseUrl = "http://localhost:8080/siege";
  
  constructor(private http: HttpClient) {}

  getSiege(): Observable<any> {
    return this.http.get(`${this.baseUrl}/afficher`);
  }

  postSiege(avion: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/ajout`, avion);
  }

  updateSiege(id: number, avion: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/modifier/${id}`, avion);
  }

  deleteSiege(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/supprimer/${id}`);
  }
}
