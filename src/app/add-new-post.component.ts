import { Component, OnInit } from "@angular/core";
import { FacadeService } from "./facade.service";
import { Post } from "./models/post";

@Component({
  selector: "add-new-post",
  template: `
    <div>Add new Post</div>
    <br />
    <div class="post-capture">
      <label>Post ID: </label> {{ addNew ? addedPost.id : updatedPost.id }}
      <input
        class="post-detail"
        [(ngModel)]="addNew ? addedPost.userId : updatedPost.userId"
      />
      <input
        class="post-detail"
        [(ngModel)]="addNew ? addedPost.title : updatedPost.title"
      />
      <input
        class="post-detail"
        [(ngModel)]="addNew ? addedPost.body : updatedPost.body"
      />
    </div>

    <div class="post">
      <div class="title">
        {{ addedPost.id }}. {{ addedPost.title }} by user {{ addedPost.userId }}
      </div>
      {{ addedPost.body }}
    </div>
  `,
  styles: [
    `
      .post {
        padding: 5px;
        background: #ddd;
        margin: 3px;
      }
      .post-detail {
        display: block;
        margin: 3px;
      }
    `
  ]
})
export class AddNewPostComponent implements OnInit {
  addNew: boolean;
  addedPost: Post;
  updatedPost: Post;

  constructor(private facadeService: FacadeService) {
    this.addNew = true;

    let post: Post = {
      userId: 1,
      id: 1,
      title: "My test post",
      body: "My first post regaring the facade architecture for angular."
    } as Post;

    facadeService.addPost(post);
  }

  ngOnInit(): void {
    this.facadeService.getAddedPost$().subscribe(
      addedPost => {
        this.addNew = true;
        this.addedPost = addedPost;
      },
      error => {}
    );

    this.facadeService.getUpdatedPost$().subscribe(
      updatedPost => {
        this.addNew = false;
        this.updatedPost = updatedPost;
      },
      error => {}
    );
  }
}
