import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";
import { Post, Comment } from "../blog.service";

@Component({
    selector: 'app-post',
    template: `
        <h4 class="post-title">{{ post.title }} by {{ post.userId || 'Unknown' }}</h4>
        <p class="post-body">{{ post.body }}</p>
        <mat-divider></mat-divider>
        <h5>Comments</h5>
        <ng-container *ngFor="let comment of comments">
            <p><strong>{{ comment.email }}</strong>: {{ comment.body }}</p>
        </ng-container>
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
    public post: Post = { body: '', title: '', userId: 1, id: 1 };
    public comments: Comment[] = [];

    public postId: number = -1;

    constructor(private route: ActivatedRoute, private store: Store) {
        const id = this.route.snapshot.params['id'];
        const parsed = parseInt(id);
        if (parsed && !isNaN(parsed)) {
            this.postId = parsed;
        }
    }

    ngOnInit() {
        console.log(this.route.snapshot.params['id']);
    }
}