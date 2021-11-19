import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Post } from "./post.model";
import {map, catchError} from 'rxjs/operators'
import { Subject , throwError} from "rxjs";

@Injectable({ providedIn: "root" })
export class PostService {

  error = new Subject<string>();
  constructor(private http: HttpClient) {}




  createAndStorePost(title: string, content: string) {
    const postData: Post = { title: title, content: content };

    this.http
      .post(
        "https://ng-complete-guid-baa14-default-rtdb.firebaseio.com/post.json",
        postData
      )
      .subscribe((responseData) => {
        console.log(responseData);
      },error =>{this.error.next(error.message)} );
  }





  fetchPosts() {
    return this.http.get<{ [key:string]:Post }>('https://ng-complete-guid-baa14-default-rtdb.firebaseio.com/post.json',
    {
      headers: new HttpHeaders({'Custome-Header': 'Hello'}),
      params: new HttpParams().set('print', 'pretty')
        
      
    }
    )
    .pipe(map(responseData => {
      const postArray: Post[] = [];
      for( const key in responseData){
        if(responseData.hasOwnProperty(key)){
          postArray.push({ ...responseData[key], id : key});
        }
        
      }
      return postArray;
    }),
    catchError(errorRes =>{
      return throwError(errorRes);

    })
    );
    
  }

  deletePost() {
    return this.http.delete('https://ng-complete-guid-baa14-default-rtdb.firebaseio.com/post.json')
  }
}
