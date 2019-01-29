import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { KnightComponent } from './knight/knight.component';
import { SquareComponent } from './square/square.component';
import { BoardComponent } from './board/board.component';
import {SkyhookDndModule} from '@angular-skyhook/core';
import {createDefaultMultiBackend} from '@angular-skyhook/multi-backend';
import {BoardSquareComponent} from './board-square/board-square.component';

@NgModule({
  declarations: [KnightComponent, SquareComponent, BoardComponent, BoardSquareComponent],
  imports: [
    CommonModule,
      SkyhookDndModule.forRoot({backendFactory: createDefaultMultiBackend})
  ],
  exports: [KnightComponent, SquareComponent, BoardComponent]
})
export class ComponentsModule { }
