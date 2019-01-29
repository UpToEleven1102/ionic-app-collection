import {Component, Input, OnDestroy} from '@angular/core';
import {SkyhookDndService} from '@angular-skyhook/core';

import {Payer} from '../../../services/interfaces';
import {ItemTypes} from '../../../services/constants';

@Component({
    selector: 'app-payer',
    templateUrl: './payer.component.html',
    styleUrls: ['./payer.component.scss']
})
export class PayerComponent implements OnDestroy {
    @Input() payer: Payer;

    target = this.dnd.dropTarget(ItemTypes.item, {
        drop: monitor => {
            console.log('Dropped an item', monitor.getItem());
        }
    });

    constructor(private dnd: SkyhookDndService) {
    }

    ngOnDestroy() {
        this.target.unsubscribe();
    }

}
