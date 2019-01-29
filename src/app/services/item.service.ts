import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class ItemService {
    private items = [
        {id: 1, name: 'item 1', price: 10, icon: 'flask'},
        {id: 2, name: 'item 2', price: 20, icon: 'wifi'},
        {id: 3, name: 'item 3', price: 30, icon: 'beer'},
        {id: 4, name: 'item 4', price: 40, icon: 'football'}
    ];

    constructor() {

    }

    get Items() {
        return this.items;
    }
}
