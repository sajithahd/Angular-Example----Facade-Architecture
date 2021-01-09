import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { APIService } from "./api/api.service";
import { Post } from "./models/post";
import { StateService } from "./state/state.service";

@Injectable()
export class FacadeService {
  constructor(
    private apiService: APIService,
    private stateService: StateService
  ) {}

  getPosts(): Observable<Post[]> {
    return this.stateService.getPosts();
  }

  setPosts(posts: Post[]): void {
    this.stateService.setPosts(posts);
  }

  loadPosts() {
    this.apiService.getPosts().subscribe(
      (posts: Post[]) => {
        this.setPosts(posts);
      },
      error => {
        console.log("Error occured while loading posts");
      }
    );
  }
}
