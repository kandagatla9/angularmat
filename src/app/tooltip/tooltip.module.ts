import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TooltipRoutingModule } from './tooltip-routing.module';
import { TooltipComponent } from './tooltip.component';

import {MatTooltipModule} from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [TooltipComponent],
  imports: [
    CommonModule,
    TooltipRoutingModule,
    MatTooltipModule,
    MatButtonModule
  ]
})
export class TooltipModule { }
