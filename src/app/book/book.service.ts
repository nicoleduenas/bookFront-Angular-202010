import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../environments/environment';
import { BookDetail } from './bookDetail';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private apiUrl = environment.baseUrl + 'books';
  constructor(private http: HttpClient) { }

  getBooks(): Observable<Array<BookDetail>> {
    return this.http.get<Array<BookDetail>>(this.apiUrl);
  }

}
