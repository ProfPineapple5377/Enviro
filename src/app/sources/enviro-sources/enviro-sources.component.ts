import {Component} from '@angular/core';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-enviro-sources',
  templateUrl: './enviro-sources.component.html',
  styleUrls: ['./enviro-sources.component.css']
})
export class EnviroSourcesComponent {
  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    const dialogRef = this.dialog.open(EnviroSourceDialog);
  }
}

@Component({
  selector: 'app-enviro-sources-dialog',
  templateUrl: './enviro-sources-dialog.html'
})
export class EnviroSourceDialog {
  constructor() {
  }
}
