import {Component, OnInit} from '@angular/core';
import {ItemService} from '../services/item.service';
import {Item, Payer} from '../services/interfaces';
import {PayerService} from '../services/payer.service';

@Component({
    selector: 'app-list',
    templateUrl: 'list.page.html',
    styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
    private items: Array<Item>;
    private payers: Array<Payer>;
    constructor(private itemService: ItemService, private payerService: PayerService) {
        this.items = itemService.Items;
        this.payers = payerService.Payers;
    }

    ngOnInit() {
    }
}
