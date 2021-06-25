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

export interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        }
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
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

    getUser(userId: number): Observable<User> {
        return this.http.get<User>(`https://jsonplaceholder.typicode.com/users/${userId}`);
    }
}