import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../auth_service/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AdminService  {

  public baseUrl = "http://localhost:8080/admincompagnie";

  constructor(private http: HttpClient, private authService: AuthServiceService) {}
  private createAuthorizationHeader(): HttpHeaders {
    const username = this.authService.getUsername();
    const password = this.authService.getPassword();
    const credentials = btoa(`${username}:${password}`);
    return new HttpHeaders({
      'Authorization': `Basic ${credentials}`
    });
  }

  getAdmin(): Observable<any> {
    const headers = this.createAuthorizationHeader();
    return this.http.get(`${this.baseUrl}/afficher`, {headers});
  }

  postAdmin(admin: Object): Observable<Object> {
    const headers = this.createAuthorizationHeader();
    return this.http.post(`${this.baseUrl}/ajout`, admin, {headers});
  }

  updateAdmin(id: number, admin: Object): Observable<Object> {
    const headers = this.createAuthorizationHeader();
    return this.http.put(`${this.baseUrl}/modifier/${id}`, admin, {headers});
  }

  deleteAdmin(id: number): Observable<any> {
    const headers = this.createAuthorizationHeader();
    return this.http.delete(`${this.baseUrl}/supprimer/${id}`, {headers});
  }
}
