import { Component, OnInit } from '@angular/core';
import { Post } from './blog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'The best blog ever'
}
