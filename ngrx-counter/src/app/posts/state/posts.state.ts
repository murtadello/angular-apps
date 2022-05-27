import { Post } from "src/app/models/posts.model";

export interface PostsState {
    posts : Post[];
    
}

export const intitialState : PostsState = {
    posts: []
}