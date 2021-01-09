import { Injectable } from "@angular/core";
import { APIService } from "./api/api.service";
import { StateService } from "./state/state.service";

@Injectable()
export class FacadeService {
  constructor(
    private apiService: APIService,
    private staetService: StateService
  ) {}

  getPosts() {}

  setPosts() {}

  getAllPosts() {
    this.apiService.getPosts().subscribe(
      posts => {
        console.log(posts);
      },
      error => {
        console.log("Error occured while loading posts");
      }
    );
  }
}
