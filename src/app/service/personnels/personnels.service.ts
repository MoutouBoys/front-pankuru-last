import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonnelsService {
  public baseUrl = "http://localhost:8080/personnel";
  
  constructor(private http: HttpClient) {}

  getPersonnel(): Observable<any> {
    return this.http.get(`${this.baseUrl}/afficher`);
  }

  postPersonnel(personnel: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/ajout`, personnel);
  }

  updatePersonnel(id: number, personnel: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/modifier/${id}`, personnel);
  }

  deletePersonnel(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/supprimer/${id}`);
  }
}
