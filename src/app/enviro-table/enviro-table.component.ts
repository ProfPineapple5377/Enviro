import { Component, Input } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

// tslint:disable-next-line:class-name

@Component({
    selector: 'app-enviro-table',
    templateUrl: './enviro-table.template.html',
    styleUrls: ['./enviro-table.style.css']
})
export class EnviroTableComponent {
    @Input() data;
    displayedColumns: string[] = ['name', 'country', 'reporting_year', 'disclosure_score'];
}
