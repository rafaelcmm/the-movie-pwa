import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-search-dialog',
  templateUrl: './search-dialog.component.html',
  styleUrls: ['./search-dialog.component.scss']
})
export class SearchDialogComponent implements OnInit {

  filter: string;

  constructor(
    private ref: MatDialogRef<SearchDialogComponent>,
    private snackBar: MatSnackBar
  ) { }

  ngOnInit() {
  }

  search() {
    this.ref.close();
  }

}
