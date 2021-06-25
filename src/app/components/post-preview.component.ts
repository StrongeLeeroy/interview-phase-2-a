import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-post-preview',
    template: `
        <a [routerLink]="['/', 'post', id]"><h4 class="post-title">{{ title | titlecase }}</h4></a>
        <p class="post-body">{{ body }}</p>
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
export class PostComponent {
    @Input() title: string = '';
    @Input() body: string = '';
    @Input() id: number = 0;
    @Input() userId?: number;
}