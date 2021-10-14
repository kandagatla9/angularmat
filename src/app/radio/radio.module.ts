import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RadioRoutingModule } from './radio-routing.module';
import { RadioComponent } from './radio.component';

import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  declarations: [RadioComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    RadioRoutingModule,
    MatRadioModule
  ]
})
export class RadioModule { }
