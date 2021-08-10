import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wallet-transaction-card',
  templateUrl: './wallet-transaction-card.component.html',
  styleUrls: ['./wallet-transaction-card.component.scss'],
})
export class WalletTransactionCardComponent implements OnInit {

  @Input() title: string;
  @Input() amount: number;
  @Input() wallet: number;
  @Input() isIncome: number;

  constructor() { }

  ngOnInit() {}

}
