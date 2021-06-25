import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

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
    constructor(private http: HttpClient) {}

    getPosts(): Observable<Post[]> {
        // TODO: Return an observable with all available posts.
        // GET https://jsonplaceholder.typicode.com/posts
        return this.http.get<Post[]>(`https://jsonplaceholder.typicode.com/posts`);
    }

    getPost(postId: number): Observable<Post> {
        // TODO: Return an observable with the given post.
        // GET https://jsonplaceholder.typicode.com/posts/{POST_ID}
        return this.http.get<Post>(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    }

    getComments(postId: number): Observable<Comment[]> {
        // TODO: Return an observable with all comments for a given post.
        // GET https://jsonplaceholder.typicode.com/posts/{POST_ID}/comments
        return this.http.get<Comment[]>(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
    }
}