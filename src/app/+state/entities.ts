import { createEntityAdapter, EntityAdapter } from "@ngrx/entity";
import { Post, User, Comment } from "../blog.service";

export const userAdapter: EntityAdapter<User> = createEntityAdapter<User>({
    selectId: user => user.id
});

export const postAdapter: EntityAdapter<Post> = createEntityAdapter<Post>({
    selectId: post => post.id
});

export const commentAdapter: EntityAdapter<Comment> = createEntityAdapter<Comment>({
    selectId: comment => comment.id
});