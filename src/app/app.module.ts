import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostsListComponent } from './components/posts-list/posts-list.component';
import { PostPreviewComponent } from './components/post-preview/post-preview.component';
import { PreferitiComponent } from './components/preferiti/preferiti.component';

@NgModule({
  declarations: [
    AppComponent,
    PostsListComponent,
    PostPreviewComponent,
    PreferitiComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
