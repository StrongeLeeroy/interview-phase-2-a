import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { loadPosts } from '../+state/blog.actions';
import { selectPosts } from '../+state/blog.store';
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
  public posts: Post[] = [];

  public posts$: Observable<Post[]> = this.store.select(selectPosts);

  constructor(private store: Store) {
    this.store.dispatch(loadPosts())
  }

  ngOnInit() {
    this.posts = [
      {
        id: 1,
        userId: 10,
        title: 'My first post',
        body: 'This is my first post! Here is some text for everyone to read.'
      },
      {
        id: 2,
        userId: 10,
        title: 'My second post',
        body: 'This is my second post! It\'s a bit longer than the first but this is just some random text.'
      }
    ]
  }

}
