import { EntityState } from "@ngrx/entity";
import { createReducer, Action, on, createSelector, createFeatureSelector } from "@ngrx/store";
import { Post, Comment, User } from "../blog.service";
import { loadPostCommentsSuccess, loadPostsSuccess, loadPostSuccess, loadUserSuccess } from "./blog.actions";
import { commentAdapter, postAdapter, userAdapter } from "./entities";

export interface BlogState {
    posts: EntityState<Post>;
    comments: EntityState<Comment>;
    users: EntityState<User>;
}

export const initialBlogState: BlogState = {
    posts: postAdapter.getInitialState(),
    comments: commentAdapter.getInitialState(),
    users: userAdapter.getInitialState()
};

const blogReducer = createReducer(
    initialBlogState,

    on(loadPostsSuccess, (state, props) => ({
        ...state,
        posts: postAdapter.setAll(props.posts, state.posts)
    })),

    on(loadPostSuccess, (state, props) => ({
        ...state,
        posts: postAdapter.addOne(props.post, state.posts)
    })),

    on(loadPostCommentsSuccess, (state, props) => ({
        ...state,
        comments: commentAdapter.addMany(props.comments, state.comments)
    })),

    on(loadUserSuccess, (state, props) => ({
        ...state,
        users: userAdapter.addOne(props.user, state.users)
    }))
);

export function reducer(state: BlogState | undefined, action: Action) {
    return blogReducer(state, action);
}

/**
 * SELECTORS
 */
const userSelectors = userAdapter.getSelectors();
const postSelectors = postAdapter.getSelectors();
const commentSelectors = commentAdapter.getSelectors();

export const selectBlog = createFeatureSelector<BlogState>('blog');
export const selectPostsState = createSelector(selectBlog, state => state.posts);
export const selectCommentsState = createSelector(selectBlog, state => state.comments);
export const selectUsersState = createSelector(selectBlog, state => state.users);

export const selectAllPosts = createSelector(selectPostsState, postSelectors.selectAll);
export const selectAllComments = createSelector(selectCommentsState, commentSelectors.selectAll);

export const selectPostById = (postId: number) => createSelector(selectPostsState, state => state.entities[postId] || null);
export const selectCommentsForPost = (postId: number) => createSelector(selectAllComments, state => state.filter(comment => comment.postId === postId));
export const selectUserById = (userId: number) => createSelector(selectUsersState, state => state.entities[userId] || null);
export const selectAuthorByPostId = (postId: number) => createSelector(selectUsersState, selectPostById(postId), (users, post) => post ? users.entities[post.userId] : null);