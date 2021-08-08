import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { WalletBackButtonComponent } from './elements/wallet-back-button/wallet-back-button.component';
import { WalletButtonComponent } from './elements/wallet-button/wallet-button.component';
import { WalletInputComponent } from './elements/wallet-input/wallet-input.component';
import { WalletLoadingComponent } from './elements/wallet-loading/wallet-loading.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule        
    ],
    declarations: [
        WalletInputComponent, 
        WalletButtonComponent,
        WalletBackButtonComponent,
        WalletLoadingComponent
    ],
    exports: [
        WalletInputComponent, 
        WalletButtonComponent,
        WalletLoadingComponent
    ]
})
export class CoreModule {};