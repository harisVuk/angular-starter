import * as fromUsers from './user.actions';
import { IUserLogin } from '../../models/user/IUserLogin';

export interface AuthState {
    credentials?: IUserLogin;
    error?: any;
    token?: string;
    user?: any;
}

const initialState: AuthState = {
    user: {},
    credentials: undefined,
    token: '',
    error: ''
};

export function usersReducers(state = initialState, action: fromUsers.Actions): AuthState {
    switch (action.type) {
        case fromUsers.UsersActionTypes.CLEAR: {
            return {
                ...state,
                error: ''
            };
        }
        case fromUsers.UsersActionTypes.REGISTER_SUCCESS: {
            return {
                ...state,
                user: action.payload,
                error: ''
            };
        }
        case fromUsers.UsersActionTypes.REGISTER_FAIL: {
            return {
                ...state,
                error: action.payload,
                user: {}
            };
        }
        case fromUsers.UsersActionTypes.LOGIN_SUCCESS: {
            return {
                ...state,
                token: action.payload,
                error: ''
            };
        }
        case fromUsers.UsersActionTypes.LOGIN_FAIL: {
           return {
                 ...state,
                error: action.payload,
                token: ''
            };
        }
        default: {
            return state;
        }
    }
}
