import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthServiceService } from '../auth_service/auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class FaqService {
  public baseUrl: String ="http://localhost:8080/faq";

  constructor(private http: HttpClient, private authService: AuthServiceService) {}
  private createAuthorizationHeader(): HttpHeaders {
    const username = this.authService.getUsername();
    const password = this.authService.getPassword();
    const credentials = btoa(`${username}:${password}`);
    return new HttpHeaders({
      'Authorization': `Basic ${credentials}`
    });
  }

  getFaq(): Observable<any>{
    const headers = this.createAuthorizationHeader();
    return this.http.get(`${this.baseUrl}/afficher`, {headers})
  }

  postFaq(fag: Object): Observable<any>{
    const headers = this.createAuthorizationHeader();
    return this.http.post(`${this.baseUrl}/ajout`, fag, {headers});
  }

  upFaq(id: number, faq: object): Observable<any>{
    const headers = this.createAuthorizationHeader();
    return this.http.put(`${this.baseUrl}/modifier/${id}`, faq, {headers});
  }

  deleteFag(id: number): Observable<any>{
    const headers = this.createAuthorizationHeader();
    return this.http.delete(`${this.baseUrl}/supprimer/${id}`, {headers});
  }
}
