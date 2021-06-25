import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadPosts } from '../+state/blog.actions';
import { selectAllPosts } from '../+state/blog.store';
import { Post } from '../blog.service';

@Component({
  selector: 'app-home-page',
  template: `
    <section class="posts">
      <ng-container *ngIf="posts$ | async as posts">
        <ng-container *ngFor="let post of posts">
            <app-post-preview [title]="post.title" [body]="post.body" [id]="post.id" [userId]="post.userId"></app-post-preview>
        </ng-container>
      </ng-container>
    </section>
  `,
  styles: [``]
})
export class HomePageComponent implements OnInit {
  public posts$: Observable<Post[]> = this.store.select(selectAllPosts);

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.dispatch(loadPosts());
  }

}
