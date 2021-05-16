import { Component, Input } from '@angular/core';
import {MatTableModule} from '@angular/material/table';

export interface data_interface {
    company_name: string;
    country: string;
    reporting_year: string;
    disclosure_score: string;
    response_status: string;
}

@Component({
    selector: 'enviro-table',
    templateUrl: './enviro-table.template.html',
    styleUrls: ['./enviro-table.style.css']
})
export class EnviroTable {
    @Input() data;
    displayedColumns: string[] = ['name', 'country', 'reporting_year', 'disclosure_score'];
}
