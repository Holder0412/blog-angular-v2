import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostService } from '../services/post.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.css']
})
export class NewPostComponent implements OnInit {

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit() {
  }


  onSubmit(form: NgForm){
    const titre = form.value['title'];
    const contenu = form.value['content'];
    this.postService.addPostToList(titre, contenu);
    this.router.navigate(['/posts']);
  }

}
