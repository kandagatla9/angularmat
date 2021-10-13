import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BadgeComponent } from './badge/badge.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { ChipsComponent } from './chips/chips.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DragdropComponent } from './dragdrop/dragdrop.component';
import { FormComponent } from './form/form.component';
import { NavComponent } from './nav/nav.component';
import { RadioComponent } from './radio/radio.component';
import { SliderComponent } from './slider/slider.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { StepperComponent } from './stepper/stepper.component';
import { TableComponent } from './table/table.component';
import { ThemeComponent } from './theme/theme.component';
import { TreeComponent } from './tree/tree.component';

const routes: Routes = [
  {path: 'form', component: FormComponent},
  {path: 'nav', component: NavComponent},
  {path: 'table', component: TableComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'tree', component: TreeComponent},
  {path: 'draganddrop', component: DragdropComponent},
  {path: 'theme', component: ThemeComponent},
  {path: 'slider', component: SliderComponent},
  {path: 'badge', component: BadgeComponent},
  {path: 'button', component: ButtonComponent},
  {path: 'chips', component: ChipsComponent},
  {path: 'radio', component: RadioComponent},
  {path: 'stepper', component:StepperComponent},
  {path: 'spinner', component: SpinnerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
