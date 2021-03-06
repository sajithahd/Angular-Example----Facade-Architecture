import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { PostsComponent } from "./posts.component";
import { FacadeService } from "./facade.service";
import { StateService } from "./state/state.service";
import { APIService } from "./api/api.service";
import { HttpClientModule } from "@angular/common/http";
import { AddNewPostComponent } from "./add-new-post.component";

@NgModule({
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  declarations: [AppComponent, PostsComponent, AddNewPostComponent],
  bootstrap: [AppComponent],
  providers: [FacadeService, StateService, APIService]
})
export class AppModule {}
