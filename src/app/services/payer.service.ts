import {Injectable} from '@angular/core';
import {Payer} from './interfaces';

@Injectable({
    providedIn: 'root'
})
export class PayerService {
    private payers: Array<Payer>;

    constructor() {
        this.payers = [
            {id: 1, name: 'Payer 1', total: 0, image: ''},
            {id: 2, name: 'Payer 2', total: 0, image: ''},
            {id: 3, name: 'Payer 3', total: 0, image: ''}
        ];
    }

    get Payers() {
        return this.payers;
    }
}
