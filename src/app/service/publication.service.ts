import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Publication} from "../entity/Publication";

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  private baseUrl = "http://localhost:8080/api/v1/publications";

  constructor(private http: HttpClient) { }

  getPublications(): Observable<Publication[]>{
    return this.http.get<Publication[]>(`${this.baseUrl}`);
  }
  createPublication(publication: Publication): Observable<Publication> {
    return this.http.post<Publication>(`${this.baseUrl}`, publication);
  }

  updatePublication(publication: Publication): Observable<Publication> {
    return this.http.put<Publication>(`${this.baseUrl}/${publication.id}`, publication);
  }
  deleteCompetition(publicationId: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${publicationId}`);
  }
}
