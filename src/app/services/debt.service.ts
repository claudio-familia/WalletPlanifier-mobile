import { Injectable } from '@angular/core';
import { BaseService } from '../core/services/base.service';
import { HttpClient } from '@angular/common/http';
import { Debt } from '../models/debt.model';
 
@Injectable({
  providedIn: 'root'
})
export class DebtService extends BaseService<Debt> {
  
    constructor(private _http: HttpClient) {
        super('debts', _http)
    }

    applyTransaction(id: string){
      return this._http.post(`${this._apiUrl}/${id}/transaction`, null);
    }
  
}