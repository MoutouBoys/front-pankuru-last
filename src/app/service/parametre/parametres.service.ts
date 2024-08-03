import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ParametresService {
  public baseUrl = "http://localhost:8080/parametre";

  constructor(private http: HttpClient) {}

  getParametre(): Observable<any> {
    return this.http.get(`${this.baseUrl}/afficher`);
  }

  postParametre(Parametre: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/ajout`, Parametre);
  }

  updateParametre(id: number, Parametre: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/modifier/${id}`, Parametre);
  }

  deleteParametre(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/supprimer/${id}`);
  }
}
