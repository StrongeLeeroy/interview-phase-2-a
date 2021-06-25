import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Store } from "@ngrx/store";

@Component({
    selector: 'app-post',
    template: `
        <h3 class="post-title">POST TITLE</h3>
        <p class="post-body">Post content goes here.</p>
        <mat-divider></mat-divider>
        <h5>Comments</h5>
        <p><small><strong>user@email</strong>: comment body will go here</small></p>

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

    constructor(private route: ActivatedRoute, private store: Store) {
        const idParam = this.route.snapshot.params['id'];
        const postId = parseInt(idParam);
        if (postId && !isNaN(postId)) {
            this.postId = postId;
        }
    }

    ngOnInit() {
}
}