import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts.component';
import { FacadeService } from './facade.service';
import { StateService } from './state/state.service';
import { APIService } from './api/api.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, PostsComponent ],
  bootstrap:    [ AppComponent ],
  providers: [FacadeService, StateService, APIService]
})
export class AppModule { }
