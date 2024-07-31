import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VolService {

  public baseUrl = "http://localhost:8080/vol";
  
  constructor(private http: HttpClient) {}

  getVol(): Observable<any> {
    return this.http.get(`${this.baseUrl}/afficher`);
  }

  postVol(vol: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/ajout`, vol);
  }

  updateVol(id: number, vol: Object): Observable<Object> {
    return this.http.put(`${this.baseUrl}/modifier/${id}`, vol);
  }

  deleteVol(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/supprimer/${id}`);
  }

}
