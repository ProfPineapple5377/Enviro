import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

//app component
import { EnviroApp } from './enviro.component';
import { EnviroPanel } from './panel/panel.component';
import { DropdownMenu } from './dropdown-menu/dropdown-menu.component'

//angular animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//mat components
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTableModule} from '@angular/material/table';




//add components into declarations
@NgModule({
  declarations: [
    EnviroApp,
    EnviroPanel,
    DropdownMenu,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatTooltipModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [EnviroApp]
})
export class AppModule { }
