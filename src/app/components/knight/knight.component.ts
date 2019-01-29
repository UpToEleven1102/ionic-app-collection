import {Component, OnDestroy} from '@angular/core';
import {SkyhookDndService} from '@angular-skyhook/core';

import {ItemTypes} from '../../constants';

@Component({
    selector: 'app-knight',
    template: `<span [dragSource]="knightSource" [class.dragging]="isDragging$|async">♘</span>`,
    styleUrls: ['./knight.component.scss']
})
export class KnightComponent implements OnDestroy {
    knightSource = this.dnd.dragSource(ItemTypes.KNIGHT, {
        beginDrag: () => ({})
    });

    isDragging$ = this.knightSource.listen(monitor => monitor.isDragging())

    constructor(private dnd: SkyhookDndService) {
    }

    ngOnDestroy() {
        this.knightSource.unsubscribe();
    }

}
