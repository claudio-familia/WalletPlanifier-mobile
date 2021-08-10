import { Injectable } from '@angular/core';
import { BaseService } from '../core/services/base.service';
import { HttpClient } from '@angular/common/http';
import { Wallet } from '../models/wallet.model';
import { Income } from '../models/income.model';
 
@Injectable({
  providedIn: 'root'
})
export class IncomeService extends BaseService<Income> {
  
    constructor(private _http: HttpClient) {
        super('incomes', _http)
    }
  
}