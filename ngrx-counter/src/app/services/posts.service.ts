import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class PostService {

    constructor(private http: HttpClient){}

    getPost() {
        return this.http.get(
            `https://ngrx-counter-e7b44-default-rtdb.firebaseio.com/posts.json`
        );
    }


}