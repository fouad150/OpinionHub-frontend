import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {CookieService} from "ngx-cookie-service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ReactionService {

  private apiUrl = 'http://localhost:8080/api/v1/resource/reactions';

  constructor(private http:HttpClient) {
  }

/*  createReaction(publicationId:number,userEmail:string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}`,{publicationId,userEmail});
  }*/

  createReaction(publicationId: number, userEmail: string): Observable<any> {
    const params = new HttpParams()
      .set('publicationId', publicationId.toString())
      .set('userEmail', userEmail);

    return this.http.post<any>(`${this.apiUrl}`, null, { params });
  }

  deleteReaction(publicationId: number, userEmail: string): Observable<any> {
    const params = new HttpParams()
      .set('publicationId', publicationId.toString())
      .set('userEmail', userEmail);

    return this.http.delete<any>(`${this.apiUrl}`, { params });
  }

}
