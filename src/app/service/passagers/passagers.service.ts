import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../auth_service/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class PassagersService {
  public baseUrl = "http://localhost:8080/passager";

  constructor(private http: HttpClient, private authService: AuthServiceService) {}
  private createAuthorizationHeader(): HttpHeaders {
    const username = this.authService.getUsername();
    const password = this.authService.getPassword();
    const credentials = btoa(`${username}:${password}`);
    return new HttpHeaders({
      'Authorization': `Basic ${credentials}`
    });
  }

  getPassager(): Observable<any> {
    const headers = this.createAuthorizationHeader();
    return this.http.get(`${this.baseUrl}/afficher`, {headers});
  }

  postPassager(passager: Object): Observable<Object> {
    const headers = this.createAuthorizationHeader();
    return this.http.post(`${this.baseUrl}/ajout`, passager, {headers});
  }

  updatePassager(id: number, passager: Object): Observable<Object> {
    const headers = this.createAuthorizationHeader();
    return this.http.put(`${this.baseUrl}/modifier/${id}`, passager, {headers});
  }

  deletePassager(id: number): Observable<any> {
    const headers = this.createAuthorizationHeader();
    return this.http.delete(`${this.baseUrl}/supprimer/${id}`, {headers});
  }
}
