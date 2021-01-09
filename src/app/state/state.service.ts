import { Injectable } from "@angular/core";
import { Observable, ReplaySubject } from "rxjs";
import { Post } from "../models/post";

@Injectable()
export class StateService {
  private posts$: ReplaySubject<Post[]>;
  private post$: ReplaySubject<Post>;

  constructor() {
    this.posts$ = new ReplaySubject(1);
  }

  getPosts$(): Observable<Post[]> {
    return this.posts$.asObservable();
  }

  setPosts(posts: Post[]): void {
    this.posts$.next(posts);
  }

  getAddedPost$(): Observable<Post> {
    return this.post$.asObservable();
  }

  setAddedPost(post: Post) {
    this.post$.next(post);
  }
}
