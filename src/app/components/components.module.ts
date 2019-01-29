import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KnightComponent } from './knight/knight.component';
import { SquareComponent } from './square/square.component';
import { BoardComponent } from './board/board.component';

@NgModule({
  declarations: [KnightComponent, SquareComponent, BoardComponent],
  imports: [
    CommonModule
  ],
  exports: [KnightComponent, SquareComponent, BoardComponent]
})
export class ComponentsModule { }
