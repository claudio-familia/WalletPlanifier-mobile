import { Injectable } from '@angular/core';
import { BaseService } from '../core/services/base.service';
import { HttpClient } from '@angular/common/http';
import { Wallet } from '../models/wallet.model';
 
@Injectable({
  providedIn: 'root'
})
export class WalletService extends BaseService<Wallet> {
  
    constructor(private _http: HttpClient) {
        super('wallets', _http)
    }
  
}