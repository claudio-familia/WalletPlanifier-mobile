import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { WalletButtonComponent } from "../elements/wallet-button/wallet-button.component";
import { WalletInputComponent } from "../elements/wallet-input/wallet-input.component";

@NgModule({
    imports: [CommonModule],
    declarations: [
        WalletInputComponent, 
        WalletButtonComponent
    ],
    exports: [
        WalletInputComponent, 
        WalletButtonComponent
    ]
})
export class PagesModule { }