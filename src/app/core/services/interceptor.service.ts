import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError, BehaviorSubject, of } from 'rxjs';
import {
  catchError
} from 'rxjs/operators';
import { ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { environment } from 'src/environments/environment';
 
@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  tokenSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);
 
  constructor(private apiService: AuthService, private toastCtrl: ToastController) { }
   
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
 
    if (this.isInBlockedList(request.url)) {
      return next.handle(request);
    } else {
      return next.handle(this.addToken(request)).pipe(
        catchError(err => {
            return throwError(err);
        })
      );
    }
  }
   
  private isInBlockedList(url: string): Boolean { 
    //This list is for endpoints that does not need JWT Token   
    if (url == `${environment.endpoints}/Authentication/login`) {
      return true;
    } else {
      return false;
    }
  }
 
  // Add our current access token from the service if present
  private addToken(req: HttpRequest<any>) {
    if (this.apiService.currentAccessToken) {
      return req.clone({
        headers: new HttpHeaders({
          Authorization: `Bearer ${this.apiService.currentAccessToken}`
        })
      });
    } else {
      return req;
    }
  }
}