import { Component, OnInit } from "@angular/core";
import { FacadeService } from "./facade.service";
import { Post } from "./models/post";

@Component({
  selector: "add-new-post",
  template: `
    <div>Add new Post</div>
    <div class="post-capture-wrapper">
      <div class="post-capture" *ngIf="addNew ? addedPost.id : updatedPost.id">
        <label>Post ID: </label> {{ addedPost.id }}
        <input class="post-detail" [(ngModel)]="addedPost.userId" />
        <input class="post-detail" [(ngModel)]="addedPost.title" />
        <input class="post-detail" [(ngModel)]="addedPost.body" />
      </div>
      <button (click)="addPost(addedPost)">
        {{ addNew ? "Add" : "Update" }}
      </button>
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
      .post-capture-wrapper {
        margin: 10px 0px;
        background: #eee;
        padding: 5px;
      }
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
    this.addedPost = new Post();

    // let post: Post = {
    //   userId: 1,
    //   id: 1,
    //   title: "My test post",
    //   body: "My first post regaring the facade architecture for angular."
    // } as Post;

    //facadeService.addPost(this.addedPost);
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

  addPost(post: Post) {
    this.facadeService.addPost(post);
  }
}
