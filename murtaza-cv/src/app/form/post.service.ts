import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Post } from './post.model';
import { map } from 'rxjs/operators';
@Injectable({ providedIn: 'root' })
export class PostsService {
  constructor(private http: HttpClient) {}

  createAndStorePost(fname: string, lname: string, email: string, msg: string) {
    const postData: Post = {
      fname: fname,
      lname: lname,
      email: email,
      msg: msg,
    };
    this.http
      .post(
        'https://crud-example-4c453-default-rtdb.firebaseio.com/posts.json',
        postData
      )
      .subscribe((responseData) => {
        console.log(responseData);
      });
  }
  fetchPost() {
    return this.http
      .get<{ [key: string]: Post }>(
        'https://crud-example-4c453-default-rtdb.firebaseio.com/posts.json'
      )
      .pipe(
        map((responseData) => {
          const postsArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
          return postsArray;
        })
      );
  }

  deletePosts() {
    return this.http.delete(
      'https://crud-example-4c453-default-rtdb.firebaseio.com/posts.json'
    );
  }
}
