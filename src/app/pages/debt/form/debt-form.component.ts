import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { Debt } from 'src/app/models/debt.model';
import { Frecuency } from 'src/app/models/frecuency.model';
import { AuthService } from 'src/app/services/auth.service';
import { DebtService } from 'src/app/services/debt.service';
import { FrecuencyService } from 'src/app/services/frecuency.service';

@Component({
  selector: 'app-debt-form',
  templateUrl: './debt-form.component.html',
  styleUrls: ['./debt-form.component.scss'],
})
export class DebtFormComponent implements OnInit {

  newDebt: Debt = new Debt();
  frecuencies: Frecuency[];
  selectedFrecuency: any = 'none';
  loadServ: HTMLIonLoadingElement;
  debtId: number;

  constructor(private frecuencyService: FrecuencyService,
              private authService: AuthService,
              private debtService: DebtService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private loadingService: LoadingController,
              private alertService: AlertController) { 
                this.newDebt.isFixed = true;
              }

  async ngOnInit() {
    this.loadServ = await this.loadingService.create();
    
    this.loadServ.present();

    await this.getFrecuencies();

    this.activatedRoute.params.subscribe(
      async res => {        
        if(res['id'])
          await this.getDebt(res['id']);          
      }
    )
    
    this.loadServ.dismiss();    
  }
  async getDebt(id: string) {
    this.debtService.getById(id).toPromise().then(
      res => {
        this.debtId = res.id;
        this.newDebt.description = res.description
        this.newDebt.amount = res.amount
        this.newDebt.isFixed = res.isFixed;
        this.newDebt.endDate = res.endDate;
        this.newDebt.frecuencyId = res.frecuencyId
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

    if(!this.newDebt.description || this.newDebt.description == ''){
      this.showAlert('Description is not valid')
      return;
    }

    if(!this.newDebt.amount  || this.newDebt.amount <= 0){      
      this.showAlert('Amount must be greater than 0')
      return;
    }

    if(!this.selectedFrecuency || this.selectedFrecuency == 'none'){      
      this.showAlert('Must select a frecuency')
      return;
    }

    if(this.newDebt.isFixed && this.newDebt.endDate){
      this.showAlert('Must select an end date')
      return;
    }
    
    if(this.debtId)
      this.updateDebt();
    else
      this.createDebt()
  }
  async updateDebt() {
    this.loadServ.present();

    this.newDebt.id = this.debtId;
    this.newDebt.userId = await this.authService.getUserId();
    this.newDebt.frecuencyId = this.selectedFrecuency;

    await this.debtService.update(this.newDebt).toPromise().then(
      async res => {
        console.log(res)

        const alert = await this.alertService.create({
          header: 'Operation sucessfull',
          message: 'The debt was updated correctly',
          buttons: ['OK'],
        });

        alert.present();
      }
    ).finally(() => { this.loadServ.dismiss(); });

    this.router.navigate(['debts']);

  }

  private async showAlert(message: string){
    const alert = await this.alertService.create({
      header: 'Operation failed',
      message: message,
      buttons: ['OK'],
    });

    alert.present()
  }


  private async createDebt(){    
    this.loadServ.present();

    this.newDebt.userId = await this.authService.getUserId();
    this.newDebt.frecuencyId = this.selectedFrecuency;

    await this.debtService.create(this.newDebt).toPromise().then(
      async res => {
        console.log(res)

        const alert = await this.alertService.create({
          header: 'Operation sucessful',
          message: 'The debt was created correctly',
          buttons: ['OK'],
        });

        alert.present();
      }
    ).finally(() => { this.loadServ.dismiss(); });

    this.router.navigate(['debts']);
  }

}
