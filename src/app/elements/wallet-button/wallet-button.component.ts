import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'wallet-button',
  templateUrl: './wallet-button.component.html',
  styleUrls: ['./wallet-button.component.scss'],
})
export class WalletButtonComponent implements OnInit {

  @Input() title: string;
  @Input() styleType: string;
  @Input() callback: any;

  constructor() { }

  ngOnInit() {}

}
