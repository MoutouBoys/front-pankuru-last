import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SuperAdminService {

  public baseUrl = "http://localhost:8080/superadmin";
  
  constructor(private http: HttpClient) {}

  getSuperAdmin(): Observable<any> {
    return this.http.get(`${this.baseUrl}/afficher`);
  }

  postSuperAdmin(superadmin: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/ajout`, superadmin);
  }

  updateSuperAdmin(id: number, superadmin: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/modifier/${id}`, superadmin);
  }

  deleteSuperAdmin(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/supprimer/${id}`);
  }
}
