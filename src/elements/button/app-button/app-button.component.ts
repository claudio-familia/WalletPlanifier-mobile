import { Component, Input, OnInit } from '@angular/core';
import AppButtonModel from '../app-button-model';

@Component({
  selector: 'app-button',
  templateUrl: './app-button.component.html',
  styleUrls: ['./app-button.component.scss'],
})
export class AppButtonComponent implements OnInit {

  @Input() model: AppButtonModel;

  constructor() { }

  ngOnInit() {}

}
