import {Component, OnInit} from '@angular/core';

interface Coord {
    x: number;
    y: number;
}

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
    sixtyFour = new Array(64).fill(0).map((_, i) => i);

    xy(i): Coord {
        return {
            x: i % 8,
            y: Math.floor(i / 8)
        };
    }

    isBlack({x, y}: Coord) {
        return (x + y) % 2 === 1;
    }

    constructor() {

    }

    ngOnInit() {
    }

}
