import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabsRoutingModule } from './tabs-routing.module';
import { TabsComponent } from './tabs.component';


import {MatTabsModule} from '@angular/material/tabs';
@NgModule({
  declarations: [TabsComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    TabsRoutingModule,
    MatTabsModule
  ]
})
export class TabsModule { }
