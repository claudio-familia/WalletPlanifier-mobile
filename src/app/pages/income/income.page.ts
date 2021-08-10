import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Income } from 'src/app/models/income.model';
import { IncomeService } from 'src/app/services/income.service';

@Component({
  selector: 'app-income',
  templateUrl: './income.page.html',
  styleUrls: ['./income.page.scss'],
})
export class IncomePage implements OnInit {
  incomes: Income[] = [];

  constructor(private incomeService: IncomeService, private activatedRoute: ActivatedRoute) { }

  async ngOnInit() {
    this.activatedRoute.params.subscribe(
      async res => {
        await this.getIncomes();    
      }
    )    
  }

  private async getIncomes() {
    this.incomeService.get().toPromise().then(
      res => {
        this.incomes = res;
      }
    );
  }

  add(){}

}
