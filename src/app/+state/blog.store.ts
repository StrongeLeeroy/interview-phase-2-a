import { createReducer, Action, on, createSelector, createFeatureSelector } from "@ngrx/store";
import { Post, Comment } from "../blog.service";
import { unique } from "../utils/unique";
import { loadPostCommentsSuccess, loadPostsSuccess, loadPostSuccess } from "./blog.actions";

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

    on(loadPostsSuccess, (state, props) => ({
        ...state,
        posts: props.posts
    })),

    on(loadPostSuccess, (state, props) => ({
        ...state,
        posts: unique([...state.posts, props.post])
    })),

    on(loadPostCommentsSuccess, (state, props) => ({
        ...state,
        comments:  unique([...state.comments, ...props.comments])
    }))
);

export function reducer(state: BlogState | undefined, action: Action) {
    return blogReducer(state, action);
}

export const selectBlog = createFeatureSelector<BlogState>('blog');
export const selectPosts = createSelector(selectBlog, state => state.posts);
export const selectPostById = (postId: number) => createSelector(selectBlog, state => state.posts.find(post => post.id === postId));
export const selectCommentsForPost = (postId: number) => createSelector(selectBlog, state => state.comments.filter(comment => comment.postId === postId));