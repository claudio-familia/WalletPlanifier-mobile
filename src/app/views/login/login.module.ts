import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginPageRoutingModule } from './login-routing.module';

import { LoginPage } from './login.page';
import { WalletButtonComponent } from 'src/app/elements/wallet-button/wallet-button.component';
import { WalletInputComponent } from 'src/app/elements/wallet-input/wallet-input.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoginPageRoutingModule
  ],
  declarations: [
    LoginPage,
    WalletButtonComponent,
    WalletInputComponent
  ]
})
export class LoginPageModule { }
