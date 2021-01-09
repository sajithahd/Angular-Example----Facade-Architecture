import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Post } from "../models/post";

@Injectable()
export class APIService {
  constructor(private http: HttpClient) {}

  getPosts(): Observable<Post[]> {
    this.http.get<Post[]>(
      "https://jsonplaceholder.typicode.com/posts"
    ) as Observable<Post[]>;
    return null;
  }
}
