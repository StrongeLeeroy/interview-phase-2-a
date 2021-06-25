import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { Observable } from "rxjs";
import { loadPost, loadPostComments } from "../+state/blog.actions";
import { selectCommentsForPost, selectPostById } from "../+state/blog.store";
import { Post, Comment } from "../blog.service";

@Component({
    selector: 'app-post',
    template: `
        <ng-container *ngIf="post$ | async as post">
            <h3 class="post-title">{{ post.title }}</h3>
            <p class="post-body">{{ post.body }}</p>
            <mat-divider></mat-divider>
            <h5>Comments</h5>
        </ng-container>
        
        <ng-container *ngFor="let comment of comments$ | async">
            <p><small><strong>{{ comment.email }}</strong>: {{ comment.body }}</small></p>
        </ng-container>

        <mat-divider></mat-divider>
        <a [routerLink]="['/']">HOME</a>
    `,
    styles: [`
        .post-title {
            margin-bottom: 5px;
        }

        .post-body {
            margin-top: 0;
        }
    `]
})
export class PostPageComponent implements OnInit {
    public postId: number = -1;

    public post$: Observable<Post | undefined>;
    public comments$: Observable<Comment[]>;

    constructor(private route: ActivatedRoute, private store: Store) {
        const idParam = this.route.snapshot.params['id'];
        const postId = parseInt(idParam);
        if (postId && !isNaN(postId)) {
            this.postId = postId;
        }
        this.post$ = this.store.select(selectPostById(postId));
        this.comments$ = this.store.select(selectCommentsForPost(postId));
    }

    ngOnInit() {
        this.store.dispatch(loadPost({ postId: this.postId }));
        this.store.dispatch(loadPostComments({ postId: this.postId }));
    }
}