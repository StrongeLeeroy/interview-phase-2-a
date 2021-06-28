import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";
import { loadPost, loadPostComments, loadUser } from "../+state/blog.actions";
import { selectAuthorByPostId, selectCommentsForPost, selectPostById, selectUsersState } from "../+state/blog.store";
import { Post, Comment, User } from "../blog.service";

@Component({
    selector: 'app-post',
    template: `
        <nav [style.margin-bottom.px]="20">
            <a [routerLink]="['/']">HOME</a>
        </nav>
        <mat-divider [style.margin-bottom.px]="20"></mat-divider>
        <ng-container *ngIf="post$ | async as post">
            <h3 class="post-title">{{ post.title | titlecase }}</h3>
            <h5 class="text-subtle" *ngIf="author$ | async as author">by {{ author.username }} ({{ author.email }})</h5>
            <p class="post-body">{{ post.body }}</p>
        </ng-container>
        
        <div class="comments-wrapper">
            <h5>Comments</h5>
            <ng-container *ngFor="let comment of comments$ | async">
                <p [style.margin-bottom.px]="0"><small><strong>{{ comment.email }}</strong></small></p>
                <p class="text-subtle"><small>{{ comment.body }}</small></p>
            </ng-container>
        </div>
    `,
    styles: [`
        .post-title {
            margin-bottom: 5px;
        }

        .post-body {
            margin-top: 0;
        }

        .comments-wrapper {
            background-color: #101010;
            padding: 10px 20px;
            margin-top: 30px;
        }
    `]
})
export class PostPageComponent implements OnInit {
    public postId: number = -1;

    public post$: Observable<Post | null>;
    public comments$: Observable<Comment[]>;
    public author$: Observable<User | null | undefined>;

    constructor(private route: ActivatedRoute, private store: Store) {
        const idParam = this.route.snapshot.params['id'];
        const postId = parseInt(idParam);
        if (postId && !isNaN(postId)) {
            this.postId = postId;
        }
        this.post$ = this.store.select(selectPostById(postId))
        .pipe(
            tap(post => post ? this.store.dispatch(loadUser({ userId: post.userId })) : null)
        );

        this.author$ = this.store.select(selectAuthorByPostId(postId));
        this.comments$ = this.store.select(selectCommentsForPost(postId));
    }

    ngOnInit() {
        this.store.dispatch(loadPost({ postId: this.postId }));
        this.store.dispatch(loadPostComments({ postId: this.postId }));
    }
}