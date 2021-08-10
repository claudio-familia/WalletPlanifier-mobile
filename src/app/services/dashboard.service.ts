import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { from, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DashboardService {
    url: string = "";

    constructor(private http: HttpClient) {
        this.url = `${environment.apiUrl + environment.endpoints.dashboard.balance}`;
    }

    getBalance(): Observable<any> {
        return this.http.get(this.url);
    }

    getWallet(): Observable<any> {
        return this.http.get(`${environment.apiUrl}/dashboard/wallet`);
    }
}