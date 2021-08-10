import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Income } from 'src/app/models/income.model';
import { IncomeService } from 'src/app/services/income.service';

@Component({
  selector: 'app-income-detail',
  templateUrl: './income-detail.component.html',  
})
export class IncomeDetailComponent implements OnInit {
  income: Income = new Income();

  constructor(private incomeService: IncomeService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  async ngOnInit() {
    this.activatedRoute.params.subscribe(
        async res => {
            if(res['id'])
                await this.getIncome(res['id']);
            else    
                this.router.navigate['incomes']
        }
    )    
  }

  private async getIncome(id: string) {
    this.incomeService.getById(id).toPromise().then(
      res => {
          console.log(res)
        this.income = res;
      }
    );
  }
  
  applyTransaction(){
      console.log('apply transaction')
  }

}
