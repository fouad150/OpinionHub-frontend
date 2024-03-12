import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Publication} from "../entity/Publication";

@Injectable({
  providedIn: 'root'
})
export class PublicationService {

  private baseUrl = "http://localhost:8080/api/v1/resource/publications";

  constructor(private http: HttpClient) { }

  getPublications(): Observable<Publication[]>{
    return this.http.get<Publication[]>(`${this.baseUrl}`);
  }
  createPublication(formData:FormData ): Observable<any> {
    console.log("add publication")
    return this.http.post<any>(`${this.baseUrl}`, formData);
  }

  updatePublication(publication: Publication): Observable<Publication> {
    return this.http.put<Publication>(`${this.baseUrl}/${publication.id}`, publication);
  }
  deleteCompetition(publicationId: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${publicationId}`);
  }
}
