import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemComponent } from './item/item.component';
import {IonicModule} from '@ionic/angular';

@NgModule({
  declarations: [ItemComponent],
  imports: [
      IonicModule.forRoot(),
      CommonModule
  ],
  exports: [ItemComponent]
})
export class ComponentsModule { }
