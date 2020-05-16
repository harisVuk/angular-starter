import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandler } from '../error-handler.service';
import { Observable } from 'rxjs';
import { INews } from '../../models/news/news';

@Injectable({
    providedIn: 'root'
})
export class NewsService {

    baseURL = 'http://localhost:25560/news';


    constructor(private http: HttpClient,
        private httpErrorHandler: HttpErrorHandler) { }

    getNews(): Observable<INews[]> {
        return this.http.get<INews[]>(this.baseURL)
            .pipe(
                catchError(err => this.httpErrorHandler.handelError(err))
        );
    }

}
