import { Component } from '@angular/core';
import { MatDialog } from '@angular/material';
import { SearchDialogComponent } from './components/search-dialog/search-dialog.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  constructor(
    private dialog: MatDialog
  ) {

  }

  openDialog() {
    const ref = this.dialog.open(SearchDialogComponent, {
      width: '400px'
    });
  }
}
