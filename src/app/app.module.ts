import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

// app component
import { EnviroAppComponent } from './enviro.component';
import { DropdownMenuComponent } from './dropdown-menu/dropdown-menu.component';
import { EnviroTableComponent } from './enviro-table/enviro-table.component';
import { HeaderComponent} from './header/app-header.component';
import {EnviroDataTableComponent} from './enviro-table/data/enviro-data-table.component';
// angular animations
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// mat components
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule, MatToolbarModule} from '@angular/material';
import { EnviroSourcesComponent } from './sources/enviro-sources/enviro-sources.component';




// add components into declarations
@NgModule({
  declarations: [
    EnviroAppComponent,
    DropdownMenuComponent,
    EnviroTableComponent,
    EnviroDataTableComponent,
    HeaderComponent,
    EnviroSourcesComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatButtonModule,
        MatInputModule,
        MatTooltipModule,
        MatTableModule,
        MatToolbarModule,
        MatCardModule
    ],
  providers: [],
  bootstrap: [EnviroAppComponent]
})
export class AppModule { }
