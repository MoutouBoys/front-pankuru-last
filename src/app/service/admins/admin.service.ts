import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminService  {

  public baseUrl = "http://localhost:8080/admin";
  
  constructor(private http: HttpClient) {}

  getAdmin(): Observable<any> {
    return this.http.get(`${this.baseUrl}/afficher`);
  }

  postAdmin(admin: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/ajout`, admin);
  }

  updateAdmin(id: number, admin: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/modifier/${id}`, admin);
  }

  deleteAdmin(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/supprimer/${id}`);
  }
}
