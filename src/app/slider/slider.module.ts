import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SliderRoutingModule } from './slider-routing.module';
import { SliderComponent } from './slider.component';
import { MatSliderModule } from '@angular/material/slider'

@NgModule({
  declarations: [SliderComponent],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    SliderRoutingModule,
    MatSliderModule
  ]
})
export class SliderModule { }
