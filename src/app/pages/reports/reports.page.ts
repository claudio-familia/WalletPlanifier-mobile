import { Component, OnInit } from '@angular/core';
import { Transactions } from 'src/app/models/transaction.model';
import { TransactionService } from 'src/app/services/transaction.service';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.page.html',
  styleUrls: ['./reports.page.scss'],
})
export class ReportsPage implements OnInit {

  transactions: Transactions[] = [];

  constructor(
    private transactionService: TransactionService
  ) { }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.transactionService.get().subscribe((transactions: Transactions[]) => {      
      this.transactions = transactions;

      console.log(this.transactions);
    });
  }
}
