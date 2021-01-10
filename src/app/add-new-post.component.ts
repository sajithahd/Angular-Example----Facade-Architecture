import { Component, OnInit } from "@angular/core";
import { FacadeService } from "./facade.service";
import { Post } from "./models/post";

@Component({
  selector: "add-new-post",
  template: `
    <div>Add new Post</div>
    <div class="post-capture-wrapper">
      <!-- <div class="post-capture" *ngIf="post">
        <label>Post ID: </label> {{ post.id }}
        <input class="post-detail" [(ngModel)]="post.userId" />
        <input class="post-detail" [(ngModel)]="post.title" />
        <input class="post-detail" [(ngModel)]="post.body" />
      </div> -->

      <form #postForm="ngForm">
        <div class="post-capture" *ngIf="post">
          <label>Post ID: </label> {{ post.id }}
          <div>
            <label for="userId">User ID </label>
            <input
              id="userId"
              name="userId"
              #userId="ngModel"
              class="post-detail"
              [(ngModel)]="post.userId"
              required
              minlength="4"
            />
            <div *ngIf="userId.invalid && (userId.touched || userId.dirty)">
              <span *ngIf="userId.errors.required">
                Reured field
              </span>
              <span *ngIf="userId.errors.minlength">
                Min length
              </span>
            </div>
          </div>

          <div>
            <label for="title">Title</label>
            <input
              class="post-detail"
              [(ngModel)]="post.title"
              name="title"
              required
              #title="ngModel"
            />
            <div *ngIf="title.invalid && (title.dirty || title.touched)">
              <span *ngIf="title.errors.reuired">Required filed</span>
            </div>
          </div>

          <input class="post-detail" [(ngModel)]="post.body" name="body" />
        </div>

        <button
          type="submit"
          [disabled]="postForm.invalid"
          (click)="addPost(post)"
        >
          {{ addNew ? "Add" : "Update" }}
        </button>
      </form>
    </div>
    <div class="post">
      <div class="title">
        {{ addedPost?.id }}. {{ addedPost?.title }} by user
        {{ addedPost?.userId }}
      </div>
      {{ addedPost?.body }}
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
  post: Post;
  addedPost: Post;
  updatedPost: Post;

  constructor(private facadeService: FacadeService) {
    this.addNew = true;
    this.post = new Post();

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
        this.post = updatedPost;
      },
      error => {}
    );
  }

  addPost(post: Post) {
    if (post.id) {
      this.facadeService.updatePost(post);
    } else {
      this.facadeService.addPost(post);
    }
  }
}
