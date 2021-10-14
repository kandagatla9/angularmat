import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListRoutingModule } from './list-routing.module';
import { ListComponent } from './list.component';

import {MatListModule} from '@angular/material/list';
@NgModule({
  declarations: [ListComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    ListRoutingModule,
    MatListModule
  ]
})
export class ListModule { }
