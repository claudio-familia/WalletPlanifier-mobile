import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'wallet-card',
  templateUrl: './wallet-card.component.html',
  styleUrls: ['./wallet-card.component.scss'],
})
export class WalletCardComponent implements OnInit {

  @Input() title: string;
  @Input() value: string;
  @Input() valueColor: string;
  @Input() valueSize: number;

  constructor() { }

  ngOnInit() {}

}
