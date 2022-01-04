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

  constructor(private http: HttpClient, private postsService:PostsService) { }

  ngOnInit(){
    this.isFetching = true;
    this.postsService.fetchPost().subscribe(posts =>{
      this.isFetching = false;
      this.loadedPosts = posts;

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

    });
    

  }
  onClearPosts(){
    //send Http request
    this.postsService.deletePosts().subscribe(() =>{
      this.loadedPosts = [];
    });
  }


  

}
