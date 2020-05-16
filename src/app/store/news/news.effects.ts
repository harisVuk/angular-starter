import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, switchMap } from 'rxjs/operators';
import * as newsActions from './news.actions';
import { NewsService } from '../../services/news/news.service';
import { of } from 'rxjs';

@Injectable()
export class NewsEffects {

    loadNews$ = createEffect(() =>
        this.actions$.pipe(
            ofType(newsActions.NewsActionTypes.Load),
            switchMap(() =>
            this.newsService.getNews().pipe(
                map(news => (new newsActions.LoadSuccess(news))),
                catchError(err => of(new newsActions.LoadFail(err))))
            )
        )
    );


    constructor(private actions$: Actions,
                private newsService: NewsService
    ) {}
}
