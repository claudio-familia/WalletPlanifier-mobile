import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { Frecuency } from 'src/app/models/frecuency.model';
import { Income } from 'src/app/models/income.model';
import { AuthService } from 'src/app/services/auth.service';
import { FrecuencyService } from 'src/app/services/frecuency.service';
import { IncomeService } from 'src/app/services/income.service';

@Component({
  selector: 'app-income-form',
  templateUrl: './income-form.component.html',
  styleUrls: ['./income-form.component.scss'],
})
export class IncomeFormComponent implements OnInit {

  newIncome: Income = new Income();
  frecuencies: Frecuency[];
  selectedFrecuency: any = 'none';
  loadServ: HTMLIonLoadingElement;
  incomeId: number;

  constructor(private frecuencyService: FrecuencyService,
              private authService: AuthService,
              private incomeService: IncomeService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private loadingService: LoadingController,
              private alertService: AlertController) { }

  async ngOnInit() {
    this.loadServ = await this.loadingService.create();
    
    this.loadServ.present();

    await this.getFrecuencies();

    this.activatedRoute.params.subscribe(
      async res => {        
        if(res['id'])
          await this.getIncome(res['id']);          
      }
    )
    
    this.loadServ.dismiss();    
  }
  async getIncome(id: string) {
    this.incomeService.getById(id).toPromise().then(
      res => {
        this.incomeId = res.id;
        this.newIncome.description = res.description
        this.newIncome.amount = res.amount
        this.newIncome.frecuencyId = res.frecuencyId
        this.selectedFrecuency = res.frecuencyId
      }
    )
  }

  private async getFrecuencies(){
    this.frecuencyService.get().toPromise().then(
      res => {
        this.frecuencies = res;        
      }
    )
  }

  public async create(){

    if(!this.newIncome.description || this.newIncome.description == ''){
      this.showAlert('Description is not valid')
      return;
    }

    if(!this.newIncome.amount  || this.newIncome.amount <= 0){      
      this.showAlert('Amount must be greater than 0')
      return;
    }

    if(!this.selectedFrecuency || this.selectedFrecuency == 'none'){      
      this.showAlert('Must select a frecuency')
      return;
    }
    
    if(this.incomeId)
      this.updateIncome();
    else
      this.createIncome()
  }
  async updateIncome() {
    this.loadServ.present();

    this.newIncome.id = this.incomeId;
    this.newIncome.userId = await this.authService.getUserId();
    this.newIncome.frecuencyId = this.selectedFrecuency;

    await this.incomeService.update(this.newIncome).toPromise().then(
      async res => {
        console.log(res)

        const alert = await this.alertService.create({
          header: 'Operation sucessfull',
          message: 'The income was updated correctly',
          buttons: ['OK'],
        });

        alert.present();
      }
    ).finally(() => { this.loadServ.dismiss(); });

    this.router.navigate(['incomes']);

  }

  private async showAlert(message: string){
    const alert = await this.alertService.create({
      header: 'Operation failed',
      message: message,
      buttons: ['OK'],
    });

    alert.present()
  }


  private async createIncome(){    
    this.loadServ.present();

    this.newIncome.userId = await this.authService.getUserId();
    this.newIncome.frecuencyId = this.selectedFrecuency;

    await this.incomeService.create(this.newIncome).toPromise().then(
      async res => {
        console.log(res)

        const alert = await this.alertService.create({
          header: 'Operation sucessfull',
          message: 'The income was created correctly',
          buttons: ['OK'],
        });

        alert.present();
      }
    ).finally(() => { this.loadServ.dismiss(); });

    this.router.navigate(['incomes']);
  }
}
