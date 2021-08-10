import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Transactions } from "../models/transaction.model";

@Injectable({
    providedIn: 'root'
})
export class TransactionService {

    _apiUrl: string;

    constructor(private _httpService: HttpClient) {
        this._apiUrl = `${environment.apiUrl}/transactions`;
    }

    get(): Observable<Transactions[]> {
        return this._httpService.get<Transactions[]>(this._apiUrl);
    }
}