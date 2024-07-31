import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AeroportsService {

  public baseUrl = "http://localhost:8080/aeroport";
  
  constructor(private http: HttpClient) {}

  getAeroport(): Observable<any> {
    return this.http.get(`${this.baseUrl}/afficher`);
  }

  postAeroport(aeroport: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/ajout`, aeroport);
  }

  updateAeroport(id: number, aeroport: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/modifier/${id}`, aeroport);
  }

  deleteAeroport(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/supprimer/${id}`);
  }
}
