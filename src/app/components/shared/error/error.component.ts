import { Component, Input, ChangeDetectionStrategy } from '@angular/core';


@Component({
    selector: 'be-error',
    templateUrl: './error.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class ErrorComponent {

    @Input() messages: string;

    constructor() { }
}
