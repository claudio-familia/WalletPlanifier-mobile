import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { BaseService } from 'src/app/core/services/base.service';
import { Wallet } from 'src/app/models/wallet.model';
import { WalletService } from 'src/app/services/wallet.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.page.html',
  styleUrls: ['./wallet.page.scss'],
})
export class WalletPage implements OnInit {

  wallet: Wallet = null;
  showNoWalletMessage: boolean = false;

  constructor(private walletService: WalletService, private loadingService: LoadingController) { }

  async ngOnInit() {
    await this.getWallet();
  }

  private async getWallet() {
    const loading = await this.loadingService.create();

    loading.present();

    await this.walletService.get().toPromise()
      .then(res => {
        if (res && res.length > 0)
          this.wallet = res[0];
        else
          this.showNoWalletMessage = true;
      }).finally(() => { loading.dismiss() });
  }
}
