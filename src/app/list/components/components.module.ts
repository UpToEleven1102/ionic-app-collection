import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SkyhookDndModule} from '@angular-skyhook/core';
import {createDefaultMultiBackend} from '@angular-skyhook/multi-backend';

import {ItemComponent} from './item/item.component';
import {IonicModule} from '@ionic/angular';
import {PayerComponent} from './payer/payer.component';
import {ItemListComponent} from './item-list/item-list.component';
import {PayerListComponent} from './payer-list/payer-list.component';

@NgModule({
    declarations: [ItemComponent, PayerComponent, ItemListComponent, PayerListComponent],
    imports: [
        IonicModule.forRoot(),
        CommonModule,
        SkyhookDndModule.forRoot({backendFactory: createDefaultMultiBackend})
    ],
    exports: [ItemComponent, PayerComponent, ItemListComponent, PayerListComponent]
})
export class ComponentsModule {
}
