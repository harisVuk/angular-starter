import { INews } from '../../models/news/news';
import { Action } from '@ngrx/store';

export enum NewsActionTypes {
    Load = '[News] Load',
    LoadSuccess = '[News] Load Success',
    LoadFail = '[News] Load Fail'
}


export class Load implements Action {
    readonly type = NewsActionTypes.Load;

    constructor() { }
}
export class LoadSuccess implements Action {
    readonly type = NewsActionTypes.LoadSuccess;

    constructor(public payload: INews[]) { }
}
export class LoadFail implements Action {
    readonly type = NewsActionTypes.LoadFail;

    constructor(public payload: string) { }
}


export type NewsActions = Load
    | LoadSuccess
    | LoadFail;
