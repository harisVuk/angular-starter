import { ActionReducer, ActionReducerMap } from '@ngrx/store';
import { usersReducers } from './user/user.reducers';
import { newsReducer } from './news/news.reducer';
import { AuthState } from './user/user.reducers';
import { NewsState } from './news/news.reducer';

export interface IAppState {
    news: NewsState;
    user: AuthState;
}

export const reducers: ActionReducerMap<IAppState> = {
    user: usersReducers,
    news: newsReducer
};
