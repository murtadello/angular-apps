
import { createReducer, on} from "@ngrx/store";
import { update } from "src/app/counter/state/counter.actions";
import { addPost, deletePost, updatePost } from "./posts.actions";
import { intitialState } from "./posts.state";

const _postsReducer = createReducer(
    intitialState,
     on(addPost, (state, action) =>{
         let post = {...action.post};
         post.id = (state.posts.length + 1).toString();
         return {
             ...state,
             posts:[...state.posts, post]
         }
        }), 
    on(updatePost, (state, action)=>{
            const updatedPost = state.posts.map((post)=>{
                return action.post.id === post.id ? action.post: post;
            });
            return {
                ...state,
                posts: updatedPost
            };
        }),
    on(deletePost, (state, {id}) =>{
        const updatedPost = state.posts.filter(post => {
            return post.id !== id;
        })
        return{
            ...state,
            posts: updatedPost

        }
    })


);
export function postsReducer(state, action) {
    return _postsReducer(state, action);

}