import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import {Location} from '@angular/common';


@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {

  @Input()
  title: string;
  @Input()
  backEnable: boolean;

  constructor(private _location: Location) { }

  ngOnInit() {
  }

  back() {
    this._location.back();
  }

}
