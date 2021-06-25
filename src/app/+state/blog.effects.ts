import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { of } from "rxjs";
import { catchError, exhaustMap, map } from 'rxjs/operators';
import { BlogService } from "../blog.service";
import * as BlogActions from './blog.actions';

@Injectable()
export class BlogEffects {
    loadPosts$ = createEffect(() => this.actions$.pipe(
        ofType(BlogActions.loadPosts),
        exhaustMap(action => this.posts.getPosts()
            .pipe(
                map(posts => BlogActions.loadPostsSuccess({ posts })),
                catchError(error => of(BlogActions.loadPostsError()))
            )
        )
    ));

    loadPost$ = createEffect(() => this.actions$.pipe(
        ofType(BlogActions.loadPost),
        exhaustMap(action => this.posts.getPost(action.postId)
            .pipe(
                map(post => BlogActions.loadPostSuccess({ post })),
                catchError(error => of(BlogActions.loadPostError()))
            )
        )
    ));

    loadComments$ = createEffect(() => this.actions$.pipe(
        ofType(BlogActions.loadPostComments),
        exhaustMap(action => this.posts.getComments(action.postId)
            .pipe(
                map(comments => BlogActions.loadPostCommentsSuccess({ comments })),
                catchError(error => of(BlogActions.loadPostCommentsError()))
            )
        )
    ));

    constructor(private actions$: Actions, private posts: BlogService, private store: Store) {}
}