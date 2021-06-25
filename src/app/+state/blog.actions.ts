import { createAction, props } from "@ngrx/store";
import { Post, Comment } from "../blog.service";

export const loadPosts = createAction(`[Blog] Load posts`);
export const loadPostsSuccess = createAction(`[Blog] Load posts success`, props<{ posts: Post[] }>());
export const loadPostsError = createAction(`[Blog] Load posts error`);

export const loadPost = createAction(`[Blog] Load single post`, props<{ postId: number }>());
export const loadPostSuccess = createAction(`[Blog] Load single post success`, props<{ post: Post }>());
export const loadPostError = createAction(`[Blog] Load single post error`);

export const loadPostComments = createAction(`[Blog] Load post comments`, props<{ postId: number }>());
export const loadPostCommentsSuccess = createAction(`[Blog] Load post comments success`, props<{ comments: Comment[] }>());
export const loadPostCommentsError = createAction(`[Blog] Load post comments error`);