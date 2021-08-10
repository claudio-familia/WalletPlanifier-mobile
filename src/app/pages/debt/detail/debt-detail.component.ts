import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { Debt } from 'src/app/models/debt.model';
import { DebtService } from 'src/app/services/debt.service';


@Component({
  selector: 'app-debt-detail',
  templateUrl: './debt-detail.component.html', 
  styles: [`
    section {
        padding-bottom: 20px;
    }
  `] 
})
export class DebtDetailComponent implements OnInit {
  debt: Debt = new Debt();
  frecuencyData: any;
  loadServ: HTMLIonLoadingElement;  

  constructor(private debtService: DebtService,
              private activatedRoute: ActivatedRoute,
              private loadingController: LoadingController,
              private alertService: AlertController,
              private router: Router) { }

  async ngOnInit() {
    this.loadServ = await this.loadingController.create();

    this.activatedRoute.params.subscribe(
        async res => {
            if(res['id'])
                await this.getDebt(res['id']);
            else    
                this.router.navigate['debts']
        }
    )    
  }

  private async getDebt(id: string) {
    this.debtService.getById(id).toPromise().then(
      res => {          
        this.debt = res;
        this.frecuencyData = res['frecuency']
      }
    );
  }
  
  async applyTransaction(id: string){

    this.loadServ.present();

    const alert = await this.alertService.create({
      header: 'Operation sucessful',
      message: 'The transaction was applied correctly',
      buttons: ['OK'],
    })

    this.debtService.applyTransaction(id).subscribe(
        res => {
          this.loadServ.dismiss();
            
          this.getDebt(id);

          alert.present();
        }
    )
  }

}
