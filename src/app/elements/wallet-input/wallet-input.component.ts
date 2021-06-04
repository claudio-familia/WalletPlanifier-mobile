import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'wallet-input',
  templateUrl: './wallet-input.component.html',
  styleUrls: ['./wallet-input.component.scss']
})
export class WalletInputComponent implements OnInit {

  @Input() title: string;
  @Input() type: string;
  @Input() callback: any;

  constructor() { }

  ngOnInit() {}

}
