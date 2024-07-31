// Dans avion.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AvionService {
  public baseUrl = "http://localhost:8080/avion";
  
  constructor(private http: HttpClient) {}

  getAvion(): Observable<any> {
    return this.http.get(`${this.baseUrl}/afficher`);
  }

  postAvion(avion: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/ajout`, avion);
  }

  updateAvion(id: number, avion: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/modifier/${id}`, avion);
  }

  deleteAvion(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/supprimer/${id}`);
  }
}
