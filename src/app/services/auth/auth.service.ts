import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUserLogin } from '../../models/user/IUserLogin';
import { catchError } from 'rxjs/operators';
import { HttpErrorHandler } from '../error-handler.service';
import { Observable } from 'rxjs';
import { IUserRegistration } from '../../models/user/IUserRegistration';


@Injectable({
    providedIn: 'root'
})
export class AuthService {

    baseURL = 'http://localhost:25560';
    EXPIRES_KEY = 'expires_at';
    TOKEN_KEY = 'token';

    constructor(private http: HttpClient,
        private httpErrorHandler: HttpErrorHandler) {}

    get expires() {
       return localStorage.getItem(this.EXPIRES_KEY);
    }

    get token() {
       return localStorage.getItem(this.TOKEN_KEY);
    }

    get isAuthenticated() {
        const expiresAt = JSON.parse(this.expires || '{}');
        if (new Date().getTime() < expiresAt && this.token) {
            return true;
        } else {
            this.logout();
            return false;
        }
    }

    logout() {
        localStorage.removeItem(this.TOKEN_KEY);
        localStorage.removeItem(this.EXPIRES_KEY);
    }

    saveToken(authResult) {
        localStorage.setItem(this.TOKEN_KEY, authResult.token);
        localStorage.setItem(this.EXPIRES_KEY, authResult.expires_at);
    }


    signup(user: IUserRegistration): Observable<any> {
        return this.http.post<IUserRegistration>(this.baseURL + '/account/signup', user)
            .pipe(
                catchError(err => this.httpErrorHandler.handelError(err))
            );
    }

    singin(credentials: IUserLogin): Observable<any> {
        return this.http.post<IUserLogin>(this.baseURL + '/account/signin', credentials)
            .pipe(
                catchError(err => this.httpErrorHandler.handelError(err))
            );
    }


}
