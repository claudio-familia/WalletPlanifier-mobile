import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Debt } from 'src/app/models/debt.model';
import { DebtService } from 'src/app/services/debt.service';

@Component({
  selector: 'app-debt',
  templateUrl: './debt.page.html',
  styleUrls: ['./debt.page.scss'],
})
export class DebtPage implements OnInit {

  debts: Debt[] = [];

  constructor(private debtService: DebtService, private activatedRoute: ActivatedRoute) { }

  async ngOnInit() {
    this.activatedRoute.params.subscribe(
      async res => {
        await this.getDebts();    
      }
    )    
  }

  private async getDebts() {
    this.debtService.get().toPromise().then(
      res => {
        this.debts = res;
      }
    );
  }

}
