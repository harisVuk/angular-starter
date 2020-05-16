import { INews } from '../../models/news/news';
import { NewsActionTypes, NewsActions } from './news.actions';

export interface NewsState {
    error: string;
    news: INews[];
}

const initialState: NewsState = {
    error: '',
    news: []
};


export function newsReducer(state = initialState, action: NewsActions): NewsState {
    switch (action.type) {
            case NewsActionTypes.LoadSuccess:
                return {
                    ...state,
                    news: action.payload,
                    error: ''
            };
            case NewsActionTypes.LoadFail:
                return {
                    ...state,
                    news: [],
                    error: action.payload
            };
            default:
                return state;
    }
}
