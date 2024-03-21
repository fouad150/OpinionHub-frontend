import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Comment} from "../entity/Comment";

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  private baseUrl = "http://localhost:8080/api/v1/resource/comments";

  constructor(private http: HttpClient) { }

  getComments(): Observable<Comment[]>{
    return this.http.get<Comment[]>(`${this.baseUrl}`);
  }
  createComment(comment: Comment): Observable<Comment> {
    return this.http.post<Comment>(`${this.baseUrl}`, comment);
  }

  updateComment(comment: Comment): Observable<Comment> {
    return this.http.put<Comment>(`${this.baseUrl}/${comment.id}`, comment);
  }
  deleteComment(commentId: number): Observable<any>{
    return this.http.delete(`${this.baseUrl}/${commentId}`);
  }
}
