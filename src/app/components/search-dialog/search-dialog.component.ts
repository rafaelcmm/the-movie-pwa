import { Component, OnInit } from '@angular/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { Location } from '@angular/common';

@Component({
  selector: 'app-search-dialog',
  templateUrl: './search-dialog.component.html',
  styleUrls: ['./search-dialog.component.scss']
})
export class SearchDialogComponent implements OnInit {

  fill: string;

  constructor(
    private ref: MatDialogRef<SearchDialogComponent>,
    private snackBar: MatSnackBar,
    private _location: Location
  ) { }

  ngOnInit() {
  }

  search() {
    this.ref.close();
    this._location.go(`movies/search/${this.fill}`);
  }

}
