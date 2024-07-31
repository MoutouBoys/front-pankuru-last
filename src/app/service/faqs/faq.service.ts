import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FaqService {
  public baseUrl: String ="http://localhost:8080/faq";
  
  constructor(private http: HttpClient) { }

  getFaq(): Observable<any>{
    return this.http.get(`${this.baseUrl}/afficher`)
  }

  postFaq(fag: Object): Observable<any>{
    return this.http.post(`${this.baseUrl}/ajout`, fag);
  }

  upFaq(id: number, faq: object): Observable<any>{
    return this.http.put(`${this.baseUrl}/modifier/${id}`, faq);
  }

  deleteFag(id: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/supprimer/${id}`);
  }
}
