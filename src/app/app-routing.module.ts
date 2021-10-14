import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BadgeComponent } from './badge/badge.component';
import { ButtonComponent } from './button/button.component';
import { CardComponent } from './card/card.component';
import { ChipsComponent } from './chips/chips.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DragdropComponent } from './dragdrop/dragdrop.component';
import { FormComponent } from './form/form.component';
import { ListComponent } from './list/list.component';
import { MenuComponent } from './menu/menu.component';
import { NavComponent } from './nav/nav.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { RadioComponent } from './radio/radio.component';
import { SelectComponent } from './select/select.component';
import { SliderComponent } from './slider/slider.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { StepperComponent } from './stepper/stepper.component';
import { TableComponent } from './table/table.component';
import { TabsComponent } from './tabs/tabs.component';
import { ThemeComponent } from './theme/theme.component';
import { TooltipComponent } from './tooltip/tooltip.component';
import { TreeComponent } from './tree/tree.component';


const routes: Routes = [
   /*{path: 'form', 
  loadChildren: () => import('./form/form.component').then(m => m.FormComponent)}, */
   
  
  /*{path: 'badge', component: BadgeComponent},*/
 
  {path: 'chips', component: ChipsComponent},
  
  
  { path: 'form', loadChildren: () => import('./form/form.module').then(m => m.FormModule) },
   { path: 'badge', loadChildren: () => import('./badge/badge.module').then(m => m.BadgeModule) },
   { path: 'button', loadChildren: () => import('./button/button.module').then(m => m.ButtonModule) },
   { path: 'dashboard', loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule) },
   { path: 'draganddrop', loadChildren: () => import('./dragdrop/dragdrop.module').then(m => m.DragdropModule) },
   { path: 'list', loadChildren: () => import('./list/list.module').then(m => m.ListModule) },
   { path: 'menu', loadChildren: () => import('./menu/menu.module').then(m => m.MenuModule) },
   { path: 'nav', loadChildren: () => import('./nav/nav.module').then(m => m.NavModule) },
   { path: 'tooltip', loadChildren: () => import('./tooltip/tooltip.module').then(m => m.TooltipModule) },
   { path: 'theme', loadChildren: () => import('./theme/theme.module').then(m => m.ThemeModule) },
   { path: 'tabs', loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsModule) },
   { path: 'stepper', loadChildren: () => import('./stepper/stepper.module').then(m => m.StepperModule) },
   { path: 'spinner', loadChildren: () => import('./spinner/spinner.module').then(m => m.SpinnerModule) },
   { path: 'paginator', loadChildren: () => import('./paginator/paginator.module').then(m => m.PaginatorModule) },
   { path: 'radio', loadChildren: () => import('./radio/radio.module').then(m => m.RadioModule) },
   { path: 'select', loadChildren: () => import('./select/select.module').then(m => m.SelectModule) },
   { path: 'table', loadChildren: () => import('./table/table.module').then(m => m.TableModule) },
   { path: 'tree', loadChildren: () => import('./tree/tree.module').then(m => m.TreeModule) },
   { path: 'slider', loadChildren: () => import('./slider/slider.module').then(m => m.SliderModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
