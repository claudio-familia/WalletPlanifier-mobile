import { Injectable } from '@angular/core';
import { BaseService } from '../core/services/base.service';
import { HttpClient } from '@angular/common/http';
import { Wallet } from '../models/wallet.model';
import { Income } from '../models/income.model';
import { Frecuency } from '../models/frecuency.model';
 
@Injectable({
  providedIn: 'root'
})
export class FrecuencyService extends BaseService<Frecuency> {
  
    constructor(private _http: HttpClient) {
        super('frecuencies', _http)
    }
  
}