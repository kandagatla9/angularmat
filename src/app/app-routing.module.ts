import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardComponent } from './card/card.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DragdropComponent } from './dragdrop/dragdrop.component';
import { FormComponent } from './form/form.component';
import { NavComponent } from './nav/nav.component';
import { TableComponent } from './table/table.component';
import { TreeComponent } from './tree/tree.component';

const routes: Routes = [
  {path: 'form', component: FormComponent},
  {path: 'nav', component: NavComponent},
  {path: 'table', component: TableComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'tree', component: TreeComponent},
  {path: 'dragdrop', component: DragdropComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
