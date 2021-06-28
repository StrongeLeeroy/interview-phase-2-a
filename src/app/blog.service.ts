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

    getUser(userId: number): Observable<User> {
        // TODO: Return an observable with the given user.
        // GET https://jsonplaceholder.typicode.com/users/${USER_ID}
        return of({}) as Observable<User>;  // Remove this line
    }
}