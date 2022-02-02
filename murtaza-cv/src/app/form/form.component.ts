import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { Post } from './post.model';
import { PostsService } from './post.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  loadedPosts: Post[] = [];
  isFetching = false;
  error = null;

  constructor(private http: HttpClient, private postsService:PostsService) { }

  ngOnInit(){
    this.isFetching = true;
    this.postsService.fetchPost().subscribe(posts =>{
      this.isFetching = false;
      this.loadedPosts = posts;

    }, error =>{
      this.error = error.message;
    });
  }
  onCreatePost(postData: Post){
    //send Http request
    this.postsService.createAndStorePost(postData.fname, postData.lname, postData.email, postData.msg);
  }

  onFetchPosts(){
    //send Http request 
    this.isFetching = true;
    this.postsService.fetchPost().subscribe(posts =>{
      this.isFetching = false;
      this.loadedPosts = posts;
    }, error =>{
      this.error = error.message;
    });
    

  }
  onClearPosts(){
    //send Http request
    this.postsService.deletePosts().subscribe(() =>{
      this.loadedPosts = [];
    });
  }

}
