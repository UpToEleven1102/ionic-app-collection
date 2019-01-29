import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {SkyhookDndService} from '@angular-skyhook/core';

import {Item} from '../../../services/interfaces';
import {ItemTypes} from '../../../services/constants';

@Component({
    selector: 'app-item',
    templateUrl: './item.component.html',
    styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnDestroy {
    @Input() item: Item;
    itemSource = this.dnd.dragSource(ItemTypes.item, {
        beginDrag: () => this.item,
    });

    constructor(private dnd: SkyhookDndService) {
    }

    ngOnDestroy() {
        this.itemSource.unsubscribe();
    }
}
