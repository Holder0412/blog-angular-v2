import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Post } from '../models/post.model';
import { elementStart } from '@angular/core/src/render3';
import { identifierModuleUrl } from '@angular/compiler';


@Injectable()
export class PostService{
    postSubject = new Subject<Post[]>();
    constructor(){}

    private posts = [
        {
          id: 0,
          title: 'Mon premier post',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          loveIts: 0,
          created_at: new Date()
        },
        {
          id: 1,
          title: 'Mon deuxième post',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
          loveIts: 0,
          created_at: new Date()
        },
        {
          id: 2,
          title: 'Mon troisième post',
          content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ',
          loveIts: 0,
          created_at: new Date()
        },
      ];


    emitPosts(){
        this.postSubject.next(this.posts);
    }

    updateIndex(index: number){
      for(let i = 0; i<this.posts.length; i++){
        const postTemp = this.posts[i];
        postTemp.id = this.posts.findIndex(p=>p.title === postTemp.title);
      }
    }
    removePostFromList(index: number){
      this.posts.splice(index, 1);  
      this.updateIndex(index);
      this.emitPosts();
    }

    addPostToList(title: string, content: string){
        const postTemp = {
            id: 0,
            title: '',
            content: '',
            loveIts: 0,
            created_at: new Date()
        };
        postTemp.title = title;
        postTemp.content = content;
        postTemp.id = this.posts.length;
        this.posts.push(postTemp);
        this.emitPosts();
    }

    increaseCounter(index: number){
        const postTemp = this.posts.find(
          (p) => {
            return p.id === index;
          }
        )
        postTemp.loveIts++;
        this.emitPosts();
    }
    decreaseCounter(index: number){
      const postTemp = this.posts.find(
        (p) =>{
          return p.id === index;
        }
      );
      postTemp.loveIts --;
      this.emitPosts();
    }
}