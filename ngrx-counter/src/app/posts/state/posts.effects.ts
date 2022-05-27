import { Injectable } from "@angular/core";
import { Actions, ofType, } from "@ngrx/effects";
import { createEffects } from "@ngrx/effects/src/effects_module";
import { merge, map } from "rxjs";
import { Post } from "src/app/models/posts.model";
import { PostService } from "src/app/services/posts.service";
import { loadPosts } from "./posts.actions";

@Injectable()
export class PostsEffects {
    constructor(private actions$: Actions, private postsService: PostService){}

    

}