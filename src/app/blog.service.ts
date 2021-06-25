import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";

export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface Comment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;
}

@Injectable({
    providedIn: 'root'
})
export class BlogService {
    constructor() {}

    getPosts(): Observable<Post[]> {
        // TODO: Return an observable with all available posts.
        // GET https://jsonplaceholder.typicode.com/posts

        return of([]); // Remove this line
    }

    getPost(postId: number): Observable<Post> {
        // TODO: Return an observable with the given post.
        // GET https://jsonplaceholder.typicode.com/posts/{POST_ID}

        return of({}) as Observable<Post>; // Remove this line
    }

    getComments(postId: number): Observable<Comment[]> {
        // TODO: Return an observable with all comments for a given post.
        // GET https://jsonplaceholder.typicode.com/posts/{POST_ID}/comments

        return of([]); // Remove this line
    }
}