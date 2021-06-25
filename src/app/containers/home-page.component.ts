import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Post } from '../blog.service';

@Component({
  selector: 'app-home-page',
  template: `
    <section class="posts">
        <ng-container *ngFor="let post of posts">
            <h3 class="post-title">{{ post.title }}</h3>
            <p class="post-body">{{ post.body }}</p>
        </ng-container>
    </section>
  `,
  styles: [``]
})
export class HomePageComponent implements OnInit {
  public posts: Post[] = [];

  constructor(private store: Store) {}

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
