import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { INews } from '../../../models/news/news';

@Component({
    selector: 'be-card',
    templateUrl: './card.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class CardComponent  {

    news = [];
    @Input() set _news(data: INews[]) {
        if (data) {
            this.news = data;
        }
    }

    constructor() { }

}
