import { Action } from '@ngrx/store';
import { IUserLogin } from '../../models/user/IUserLogin';

export enum UsersActionTypes {
      LOAD_USERS = '[User] Load Users',
      LOAD_USERS_SUCCESS = '[User] Load users success',
      LOGIN = '[User] Login',
      LOGIN_SUCCESS = '[User] Login success',
      LOGIN_FAIL = '[User] Login fail',
      REGISTER = '[User] Register',
      REGISTER_SUCCESS = '[User] Register success',
      REGISTER_FAIL = '[User] Register fail',
      CLEAR = '[User] Clear'
}


export class Clear implements Action {
    readonly type = UsersActionTypes.CLEAR;

    constructor() {}
}
export class Register implements Action {
    readonly type = UsersActionTypes.REGISTER;

    constructor(public payload: any) {}
}

export class RegisterSuccess implements Action {
    readonly type = UsersActionTypes.REGISTER_SUCCESS;

    constructor(public payload: any) {}
}

export class RegisterFail implements Action {
    readonly type = UsersActionTypes.REGISTER_FAIL;

    constructor(public payload: string) {}
}

export class Login implements Action {
    readonly type = UsersActionTypes.LOGIN;

    constructor(public payload: IUserLogin) {}
}

export class LoginSuccess implements Action {
    readonly type = UsersActionTypes.LOGIN_SUCCESS;

    constructor(public payload: any) {}
}

export class LoginFail implements Action {
    readonly type = UsersActionTypes.LOGIN_FAIL;

    constructor(public payload: string) {}
}

export class LoadUsersAction implements Action {
    readonly type = UsersActionTypes.LOAD_USERS;

    constructor() { }
}

export class LoadUsersSuccessAction implements Action {
    readonly type = UsersActionTypes.LOAD_USERS_SUCCESS;

    constructor(public payload: any) { }
}


export type Actions
    = Clear
    | LoadUsersAction
    | LoadUsersSuccessAction
    | Login
    | LoginSuccess
    | LoginFail
    | Register
    | RegisterSuccess
    | RegisterFail;
