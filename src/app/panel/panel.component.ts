import { Component, Input } from '@angular/core';
@Component({
    selector: 'enviro-panel',
    templateUrl: './panel.template.html',
    styleUrls: ['./panel.style.css']
})
export class EnviroPanel {
    @Input() company_info;
    constructor(){
    }
}