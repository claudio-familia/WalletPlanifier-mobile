import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WalletFormPage } from './form/wallet-form.page';

import { WalletPage } from './wallet.page';

const routes: Routes = [
  {
    path: '',
    component: WalletPage
  },
  {
    path:'create',
    component: WalletFormPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WalletPageRoutingModule {}
