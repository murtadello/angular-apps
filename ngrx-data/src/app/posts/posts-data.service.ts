import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { DefaultDataService, HttpUrlGenerator } from "@ngrx/data";
import { Observable, map } from "rxjs";
import { Post } from "../models/post.model";

@Injectable()

export class PostsDataService extends DefaultDataService<Post> {
    constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator){
        super('Post', http, httpUrlGenerator)
    }


    override getAll(): Observable<Post[]> {
        return this.http
          .get(`https://vue-completecourse.firebaseio.com/posts.json`)
          .pipe(
            map((data: any) => {
              const posts: Post[] = [];
              for (let key in data) {
                posts.push({ ...data[key], id: key });
              }
              return posts;
            })
          );
      }
}