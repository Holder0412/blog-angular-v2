import { Component, OnInit, Input } from '@angular/core';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.css']
})
export class PostListItemComponent implements OnInit {

  @Input() title: string;
  @Input() content: string;
  @Input() created_at: Date;
  @Input() loveIts : number;
  @Input() index: number;

  constructor(private postService: PostService){}

  incrementerCpt(){
    this.postService.increaseCounter(this.index);
  }
  
  decrementerCpt(){
    this.postService.decreaseCounter(this.index);
  }

  removePost(){
    this.postService.removePostFromList(this.index);
  }

  ngOnInit() {
  }

}
