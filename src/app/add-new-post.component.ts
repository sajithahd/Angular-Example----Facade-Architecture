import { Component } from "@angular/core";
import { FacadeService } from "./facade.service";
import { Post } from "./models/post";

@Component({
  selector: "add-new-post",
  template: `
    <div>Add new Post</div>
  `
})
export class AddNewPostComponent {
  constructor(private facadeService: FacadeService) {
    let post: Post = {
      userId: 1,
      id: 1,
      title:
        "My test post",
      body:
        "My first post regaring the facade architecture for angular."
    } as Post;
    facadeService.addPost(post);
  }
}
