import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-square',
    template: `<div [ngStyle]="getStyle()">
        <ng-content></ng-content>
    </div>`,
    styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit {
    @Input() black: boolean;

    constructor() {
    }

    ngOnInit() {
    }

    getStyle() {
        return this.black ? {backgroundColor: 'black', color: 'white'} : {backgroundColor: 'white', color: 'black'};
    }
}
