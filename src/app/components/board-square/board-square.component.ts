import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Coord} from '../../coord';
import {SkyhookDndService} from '@angular-skyhook/core';
import {ItemTypes} from '../../constants';
import {GameService} from '../../services/game.service';

@Component({
    selector: 'app-board-square',
    template: `
        <div class="wrapper" [dropTarget]="target">
            <app-square [black]="black">
                <ng-content></ng-content>
            </app-square>
        </div>
    `,
    styleUrls: ['./board-square.component.scss']
})
export class BoardSquareComponent implements OnDestroy {
    @Input() position: Coord;

    target = this.dnd.dropTarget(ItemTypes.KNIGHT, {
        canDrop: monitor => {
            return this.gameService.canMoveKnight(this.position);
        },
        drop: monitor => {
            this.gameService.moveKnight(this.position);
        }
    });

    constructor(private dnd: SkyhookDndService, private gameService: GameService) {
    }

    get black() {
        const {x, y} = this.position;
        return (x + y) % 2 === 1;
    }

    ngOnDestroy(): void {
        this.target.unsubscribe();
    }
}
