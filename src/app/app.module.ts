import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostListItemComponent } from './post-list-item/post-list-item.component';
import { PostService } from './services/post.service';
import { NewPostComponent } from './new-post/new-post.component';

const appRoutes : Routes = [
  {path: 'posts', component: PostListComponent},
  {path: 'new', component: NewPostComponent},
  {path: '', component: PostListComponent},
  {path: '**', component: PostListComponent},
  {path: 'not-found', component: PostListComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostListItemComponent,
    NewPostComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,    
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
