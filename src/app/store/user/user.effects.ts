import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { AuthService } from '../../services/auth/auth.service';
import { of } from 'rxjs';
import * as userActions from './user.actions' ;
import { Router } from '@angular/router';

@Injectable()
export class UserEffects {

    loginSuccess$ = createEffect(() =>
        this.actions$.pipe(
            ofType(userActions.UsersActionTypes.LOGIN_SUCCESS),
            tap((token: any) => {
                this.authService.saveToken(token.payload);
                this.router.navigate(['/home']);
        })
    ),
    {dispatch: false});

    loginUser$ = createEffect(() =>
        this.actions$.pipe(
         ofType(userActions.UsersActionTypes.LOGIN),
         switchMap((action: userActions.LoginSuccess) =>
            this.authService.singin(action.payload).pipe(
                map((user: any) => {
                    if (user) {
                        return new userActions.LoginSuccess(user);
                    }
                }),
                catchError(error => of(new userActions.LoginFail(error)))
           )
         )
       )
    );

    registerSuccess$ = createEffect(() =>
        this.actions$.pipe(
            ofType(userActions.UsersActionTypes.REGISTER_SUCCESS),
            tap(() => {
                this.router.navigateByUrl('/auth/signin');
            })
        ),
     {dispatch: false});

    registerUser$ = createEffect(() =>
        this.actions$.pipe(
         ofType(userActions.UsersActionTypes.REGISTER),
         switchMap((action: userActions.RegisterSuccess) =>
            this.authService.signup(action.payload).pipe(
                map((res: any) => {
                    if (res) {
                        return new userActions.RegisterSuccess(res);
                    }
                }),
                catchError(error => of(new userActions.RegisterFail(error)))
           )
         )
       )
    );
    constructor(
        private authService: AuthService,
        private actions$: Actions,
        private router: Router
    ) {}

}
