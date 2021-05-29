import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.template.html',
  styleUrls: ['./app-header.style.css']
})
export class HeaderComponent {
  githubLink() {
    window.open('https://github.com/ProfPineapple5377/Enviro');
  }
}
