import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Registration } from './registration';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {

  constructor( private _http : HttpClient) { }

  public loginUserFromRemote(registration : Registration):Observable<any>{
   return this._http.post<any>("http://localhost:9090/login", registration)
  }

  public registerUserFromRemote(registration : Registration):Observable<any>{
    return this._http.post<any>("http://localhost:9090/registeruser", registration)
   }
}
