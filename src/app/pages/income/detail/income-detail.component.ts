import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController, ModalController } from '@ionic/angular';
import { Income } from 'src/app/models/income.model';
import { IncomeService } from 'src/app/services/income.service';

@Component({
  selector: 'app-income-detail',
  templateUrl: './income-detail.component.html',
  styles: [`
    section {
        padding-bottom: 20px;
    }
  `]
})
export class IncomeDetailComponent implements OnInit {
  income: Income = new Income();
  frecuencyData: any;
  loadServ: HTMLIonLoadingElement;

  constructor(private incomeService: IncomeService,
    private activatedRoute: ActivatedRoute,
    private loadingController: LoadingController,
    private alertService: AlertController,
    private router: Router) { }

  async ngOnInit() {
    this.loadServ = await this.loadingController.create();

    this.activatedRoute.params.subscribe(
      async res => {
        if (res['id'])
          await this.getIncome(res['id']);
        else
          this.router.navigate['incomes']
      }
    )
  }

  private async getIncome(id: string) {
    this.incomeService.getById(id).toPromise().then(
      res => {
        this.income = res;
        this.frecuencyData = res.frecuency
      }
    );
  }

  async applyTransaction(id: string) {

    this.loadServ.present();

    const alert = await this.alertService.create({
      header: 'Operation sucessful',
      message: 'The transaction was applied correctly',
      buttons: ['OK'],
    })

    this.incomeService.applyTransaction(id).subscribe(
      res => {
        console.log(res);
        this.loadServ.dismiss();
        this.getIncome(id);

        alert.present();
      }
    )
  }

}
