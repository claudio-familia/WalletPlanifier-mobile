import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})
export class BaseService<T> {

    _apiUrl: string;

    constructor(baseUrl: string, private _httpService: HttpClient){
        this._apiUrl = `${environment.apiUrl}/${baseUrl}`;
    }

    get(): Observable<T[]> {
        return this._httpService.get<T[]>(this._apiUrl);
    }

    getById(id: string): Observable<T> {
        return this._httpService.get<T>(`${this._apiUrl}/${id}`);
    }

    create(data: T): Observable<T> {
        return this._httpService.post<T>(this._apiUrl, data);
    }

    update(data: T): Observable<T> {
        return this._httpService.put<T>(this._apiUrl, data);
    }

    delete(id: string): Observable<T> {
        return this._httpService.delete<T>(`${this._apiUrl}/${id}`);
    }
}