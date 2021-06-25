import { createReducer, Action, on, createSelector, createFeatureSelector } from "@ngrx/store";
import { Post, Comment } from "../blog.service";
import { loadPostsSuccess } from "./blog.actions";

export interface BlogState {
    posts: Post[];
    comments: Comment[];
}

export const initialBlogState: BlogState = {
    posts: [],
    comments: []
};

const blogReducer = createReducer(
    initialBlogState,
    /**
     * YOUR CODE HERE
     */

    on(loadPostsSuccess, (state, props) => ({
        ...state,
        posts: props.posts
    }))
);

export function reducer(state: BlogState | undefined, action: Action) {
    return blogReducer(state, action);
}

export const selectBlog = createFeatureSelector<BlogState>('blog');
export const selectPosts = createSelector(selectBlog, state => state.posts);
export const selectPostById = (postId: number) => createSelector(selectBlog, state => state.posts.find(post => post.id === postId));
export const selectCommentsForPost = (postId: number) => createSelector(selectBlog, state => state.comments.find(comment => comment.postId === postId));