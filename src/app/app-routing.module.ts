import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FiltertableComponent } from './filtertable/filtertable.component';
import { TableComponent } from './table/table.component';


const routes: Routes = [
  {
    path :"filter",
    component: FiltertableComponent
  },
  {
    path :"",
    component: TableComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
