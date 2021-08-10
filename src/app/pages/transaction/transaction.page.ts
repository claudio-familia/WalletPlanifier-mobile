import { Component, OnInit } from '@angular/core';
import { Transactions } from 'src/app/models/transaction.model';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.page.html',
  styleUrls: ['./transaction.page.scss'],
})
export class TransactionPage implements OnInit {

  transactions: Transactions[] = [];

  constructor(private transactionService: TransactionService) { }

  ngOnInit() {
    this.transactionService.get().subscribe(
      res => {
        this.transactions = res;
      }
    )
  }

}
