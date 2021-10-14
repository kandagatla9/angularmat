import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DragdropRoutingModule } from './dragdrop-routing.module';
import { DragdropComponent } from './dragdrop.component';
import { DragDropModule } from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [DragdropComponent],
  imports: [
    CommonModule,
    DragdropRoutingModule,
    DragDropModule
  ]
})
export class DragdropModule { }
