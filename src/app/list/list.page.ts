import {Component, OnInit} from '@angular/core';
import {ItemService} from '../services/item.service';
import {Item} from '../components/item/item';

@Component({
    selector: 'app-list',
    templateUrl: 'list.page.html',
    styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
    private items: Array<Item>
    constructor(private itemService: ItemService) {
        this.items = itemService.Items;
    }

    ngOnInit() {
    }
}
