import { Post } from "src/app/models/posts.model";

export interface PostsState {
    posts : Post[];
    
}

export const intitialState : PostsState = {
    posts: [
        {id: '1', title: 'Simple Title 1', description: 'Sample Description 1'},
        {id: '2', title: 'Simple Title 2', description: 'Sample Description 2'},
        {id: '3', title: 'Star Educational Society', description: 'Main Aliabad Road Quette Pakistan'}
    ]
}