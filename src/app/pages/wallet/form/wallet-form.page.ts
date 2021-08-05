import { Component, OnInit } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';
import { BaseService } from 'src/app/core/services/base.service';
import { Wallet } from 'src/app/models/wallet.model';
import { WalletService } from 'src/app/services/wallet.service';
import jwt_decode from "jwt-decode";
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-wallet',
  templateUrl: './wallet-form.page.html', 
  styles: [`
    ion-col {
      margin-top: 20px;
    }
  `] 
})
export class WalletFormPage implements OnInit {

  newWallet: Wallet = null;
  showNoWalletMessage: boolean = false;  
  loadServ: HTMLIonLoadingElement;

  constructor(private walletService: WalletService, 
              private loadingService: LoadingController,
              private alertService: AlertController,
              private router: Router,
              private storeService: Storage) { }

  async ngOnInit() {
    this.newWallet = new Wallet();
    
    this.loadServ = await this.loadingService.create();
  }

  async create(){
    const store = await this.storeService.create()
    
    const token = jwt_decode(await store.get('ACCESS_TOKEN_KEY'));

    this.loadServ.present();

    this.newWallet.userId = token['http://schemas.xmlsoap.org/ws/2005/05/identity/claims/nameidentifier'];

    await this.walletService.create(this.newWallet).toPromise().then(
      async res => {
        console.log(res)

        const alert = await this.alertService.create({
          header: 'Operation sucessfull',
          message: 'The wallet was created correctly',
          buttons: ['OK'],
        });

        alert.present();
      }
    ).finally(() => { this.loadServ.dismiss(); this.router.navigate['wallet']; });
  }
}
