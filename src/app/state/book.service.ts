import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from './book.model';

const api =
  'https://www.googleapis.com/books/v1/volumes?maxResults=5&orderBy=relevance&q=oliver%20sacks';
@Injectable({ providedIn: 'root' })
export class BooksService {
  constructor(private http: HttpClient) {}
  getBooks(): Observable<Array<Book>> {
    return of([]);
    // TODO: 1. connect to the API to load the book list”
  }
}
