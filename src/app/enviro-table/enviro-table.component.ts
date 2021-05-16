import { Component, Input } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

// tslint:disable-next-line:class-name
export interface data_inteface {
    company_name: string;
    country: string;
    reporting_year: string;
    disclosure_score: string;
    response_status: string;
}

@Component({
    selector: 'app-enviro-table',
    templateUrl: './enviro-table.template.html',
    styleUrls: ['./enviro-table.style.css']
})
export class EnviroTableComponent {
    @Input() data;
    displayedColumns: string[] = ['name', 'country', 'reporting_year', 'disclosure_score'];
}
