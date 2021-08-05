import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { WalletPageRoutingModule } from './wallet-routing.module';

import { WalletPage } from './wallet.page';
import { CoreModule } from 'src/app/core/core.module';
import { WalletFormPage } from './form/wallet-form.page';
import { RouterModule } from '@angular/router';
import { IonicStorageModule } from '@ionic/storage-angular';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    WalletPageRoutingModule,
    CoreModule,
    RouterModule,
    IonicStorageModule
  ],
  declarations: [WalletPage, WalletFormPage]
})
export class WalletPageModule {}
