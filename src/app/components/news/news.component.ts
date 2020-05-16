import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IAppState } from '../../store/index';
import { Observable } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';
import { INews } from '../../models/news/news';
import * as newsActions from '../../store/news/news.actions';

@Component({
    selector: 'be-news',
    templateUrl: './news.component.html',
})
export class NewsComponent implements OnInit {

    news$: Observable<INews[]>;

    constructor(private store: Store<IAppState>,
                private authService: AuthService) {}


    ngOnInit() {
        this.store.dispatch(new newsActions.Load());
        this.news$ = this.store.pipe(select(state => state.news.news));
    }

}
