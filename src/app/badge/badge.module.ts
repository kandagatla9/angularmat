import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BadgeRoutingModule } from './badge-routing.module';
import { BadgeComponent } from './badge.component';
import { MatIconModule } from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
@NgModule({
  declarations: [BadgeComponent],
  imports: [
    CommonModule,
    BadgeRoutingModule,
    MatIconModule,
    MatBadgeModule,
    MatButtonModule
  ]
})
export class BadgeModule { }
