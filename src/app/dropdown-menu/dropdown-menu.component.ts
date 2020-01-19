import { Component } from '@angular/core';
@Component({
    selector: 'dropdown-menu',
    templateUrl: 'dropdown-menu.template.html',
    styleUrls: ['dropdown-menu.style.css']
})
export class DropdownMenu{
    isToggled: Boolean;
    constructor(){
        this.isToggled = false;
    }
    toggleMenu(){
        this.isToggled = !this.isToggled;
    }
}