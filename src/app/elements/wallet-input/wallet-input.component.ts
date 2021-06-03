import { Component, Input, OnInit } from '@angular/core';
import WalletInputModel from './wallet-input.model';

@Component({
  selector: 'wallet-input',
  templateUrl: './wallet-input.component.html',
  styleUrls: ['./wallet-input.component.scss'],
})
export class WalletInputComponent implements OnInit {

  @Input() model: WalletInputModel;

  constructor() { }

  ngOnInit() {}

}
