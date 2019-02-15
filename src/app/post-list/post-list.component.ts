import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../services/post.service';
import { Post } from '../models/post.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  posts : Post[];
  postSubscription: Subscription;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postSubscription = this.postService.postSubject.subscribe(
      (appareils: any[])=>{
        this.posts = appareils;
      }
    )
    this.postService.emitPosts();
  }

  ngOnDestroy(){
    this.postSubscription.unsubscribe();
  }
}
