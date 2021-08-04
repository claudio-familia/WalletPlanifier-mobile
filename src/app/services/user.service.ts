import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { BaseService } from '../core/services/base.service';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class UserService extends BaseService<User> {
  
    constructor(private _http: HttpClient) {
        super('users', _http)
    }
  
}