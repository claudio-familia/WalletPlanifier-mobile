import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { WalletBackButtonComponent } from './elements/wallet-back-button/wallet-back-button.component';
import { WalletButtonComponent } from './elements/wallet-button/wallet-button.component';
import { WalletInputComponent } from './elements/wallet-input/wallet-input.component';


@NgModule({
    imports: [
        CommonModule        
    ],
    declarations: [
        WalletInputComponent, 
        WalletButtonComponent,
        WalletBackButtonComponent
    ],
    exports: [
        WalletInputComponent, 
        WalletButtonComponent,
        WalletBackButtonComponent
    ]
})
export class CoreModule {};