import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EnviroDataTableComponent} from './enviro-table/data/enviro-data-table.component';


const routes: Routes = [
  {path: '', component: EnviroDataTableComponent},
  // 404
  {path: '**', component: EnviroDataTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
