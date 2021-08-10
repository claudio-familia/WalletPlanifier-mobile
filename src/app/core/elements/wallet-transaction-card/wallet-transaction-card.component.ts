import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'wallet-transaction-card',
  templateUrl: './wallet-transaction-card.component.html',
  styleUrls: ['./wallet-transaction-card.component.scss'],
})
export class WalletTransactionCardComponent implements OnInit {

  @Input() title: string;
  @Input() income: number;
  @Input() debt: number;
  @Input() walletName: string;

  isIncome: boolean = false;
  amount: number;

  constructor() { }

  ngOnInit() {
    this.isIncome = this.income == null ? false : true;
    this.amount = this.income ? this.income : this.debt;
  }

}
