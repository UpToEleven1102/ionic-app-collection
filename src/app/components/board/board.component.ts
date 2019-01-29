import {Component, OnInit} from '@angular/core';
import {GameService} from '../../services/game.service';
import {Coord} from '../../coord';

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html',
    styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
    knightPosition;

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

    handleSquareClick(pos: Coord) {
        if (this.gameService.canMoveKnight(pos)) {
            this.gameService.moveKnight(pos);
        }
    }

    constructor(private gameService: GameService) {
        this.knightPosition = this.gameService.knightPosition$;
    }

    ngOnInit() {
    }

}
