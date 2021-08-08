import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, switchMap } from 'rxjs/operators';
import { BehaviorSubject, from, Observable, of } from 'rxjs';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { Storage } from '@ionic/storage-angular';
 
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(null);
  currentAccessToken = null;
  url = environment.apiUrl;
 
  constructor(private http: HttpClient, private router: Router, private storeService: Storage) {    
    this.loadToken();
  }
 
  async loadToken() {
    const store = await this.storeService.create();
    const token = await store.get('ACCESS_TOKEN_KEY');
    if (token && token.value) {
      this.currentAccessToken = token.value;
      this.isAuthenticated.next(true);
    } else {
      this.isAuthenticated.next(false);
    }
  }
   
  signUp(user: User): Observable<any> {
    return this.http.post(`${this.url}/users`, user);
  }
 
  async login(credentials: {userName, password}): Promise<Observable<any>> {
    const store = await this.storeService.create();
    return this.http.post(`${this.url}/Authentication/login`, credentials).pipe(
      switchMap((tokens: {accessToken }) => {
        this.currentAccessToken = tokens.accessToken;
        const storeAccess = store.set('ACCESS_TOKEN_KEY', tokens.accessToken);
        return from(Promise.all([storeAccess]));
      }),
      tap(_ => {
        this.isAuthenticated.next(true);
      })
    )
  }

  getSecretData() {
    return this.http.get(`${this.url}/Authentication/user`);
  }  

  async logout() {
    const store = await this.storeService.create();
    this.currentAccessToken = null;        
    const deleteAccess = store.remove('ACCESS_TOKEN_KEY');
    this.isAuthenticated.next(false);
    this.router.navigateByUrl('/', { replaceUrl: true });    
  }
}