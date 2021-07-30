import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EnviroDataTableComponent} from './enviro-table/data/enviro-data-table.component';
import {EnviroSourcesComponent} from './sources/enviro-sources/enviro-sources.component';


const routes: Routes = [
  {path: '', component: EnviroDataTableComponent, pathMatch: 'full' },
  // place holder
  {path: 'sources', component: EnviroSourcesComponent},
  // 404
  {path: '**', component: EnviroDataTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
