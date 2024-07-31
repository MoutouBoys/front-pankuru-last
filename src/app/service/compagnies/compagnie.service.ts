import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompagnieService{

  public baseUrl = "http://localhost:8080/compagnie";
  
  constructor(private http: HttpClient) {}

  getCompagnie(): Observable<any> {
    return this.http.get(`${this.baseUrl}/afficher`);
  }

  postCompagnie(compagnie: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/ajout`, compagnie);
  }

  updateCompagnie(id: number, compagnie: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/modifier/${id}`, compagnie);
  }

  deleteCompagnie(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/supprimer/${id}`);
  }
}
