import { Action } from '@ngrx/store';
import { IUserLogin } from '../../models/user/IUserLogin';

export enum UsersActionTypes {
      LOAD_USERS = 'LOAD_USERS',
      LOAD_USERS_SUCCESS = 'LOAD_USERS_SUCCESS',
      LOGIN = 'LOGIN',
      LOGIN_SUCCESS = 'LOGIN_SUCCESS',
      LOGIN_FAIL = 'LOGIN_FAIL',
      REGISTER = 'REGISTAR',
      REGISTER_SUCCESS = 'REGISTER_SUCCESS',
      REGISTER_FAIL = 'REGISTER_FAIL',
      CLEAR = 'CLEAR'
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
