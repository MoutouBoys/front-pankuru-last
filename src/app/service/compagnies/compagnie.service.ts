import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../auth_service/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class CompagnieService{

  public baseUrl = "http://localhost:8080/compagnie";

  constructor(private http: HttpClient, private authService: AuthServiceService) {}
  private createAuthorizationHeader(): HttpHeaders {
    const username = this.authService.getUsername();
    const password = this.authService.getPassword();
    const credentials = btoa(`${username}:${password}`);
    return new HttpHeaders({
      'Authorization': `Basic ${credentials}`
    });
  }

  getCompagnie(): Observable<any> {
    const headers = this.createAuthorizationHeader();
    return this.http.get(`${this.baseUrl}/afficher`, {headers});
  }

  postCompagnie(compagnie: Object): Observable<Object> {
    const headers = this.createAuthorizationHeader();
    return this.http.post(`${this.baseUrl}/ajout`, compagnie, {headers});
  }

  updateCompagnie(id: number, compagnie: Object): Observable<Object> {
    const headers = this.createAuthorizationHeader();
    return this.http.put(`${this.baseUrl}/modifier/${id}`, compagnie, {headers});
  }

  deleteCompagnie(id: number): Observable<any> {
    const headers = this.createAuthorizationHeader();
    return this.http.delete(`${this.baseUrl}/supprimer/${id}`, {headers});
  }
}
