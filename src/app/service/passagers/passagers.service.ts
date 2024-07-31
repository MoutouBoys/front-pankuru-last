import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PassagersService {
  public baseUrl = "http://localhost:8080/passager";
  
  constructor(private http: HttpClient) {}

  getPassager(): Observable<any> {
    return this.http.get(`${this.baseUrl}/afficher`);
  }

  postPassager(passager: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/ajout`, passager);
  }

  updatePassager(id: number, passager: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/modifier/${id}`, passager);
  }

  deletePassager(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/supprimer/${id}`);
  }
}
