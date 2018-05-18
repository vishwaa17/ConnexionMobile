import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UtilProvider } from '../util/util';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/timeout';
/*
  Generated class for the MobileotpProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MobileotpProvider {
  host: string;
  constructor(public http: HttpClient, private util: UtilProvider) {
    this.host = util.getBaseUrl();

  }
  sendOTP(mobile) {
    const urlheaders = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Accept', 'application/json');
    return this.http.post(this.host + 'api/otp/send?number=' + mobile, { headers: urlheaders, }).timeout(30000)
      .map(res => {
        return res;
      })
      .catch((error: any) => {
        if (error.status === 500) {
          console.log('error', error);
          return Observable.throw(error);
        } else if (error.status === 401) {
          console.log('error', error);
          return Observable.throw(error);
        } else if (error.status === 404) {
          console.log('error', error);
          return Observable.throw(error);
        } else {
          return Observable.throw(error);
        }
      });
  }

  verifyOTP(mobile,code) {
    const urlheaders = new HttpHeaders()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('Accept', 'application/json');
      return this.http.post(this.host + 'api/otp/verify?number='+mobile+'&code='+code,{headers: urlheaders}).timeout(30000)
      .map(res => {
        return res;
      })
      .catch((error: any) => {
        if (error.status === 500) {
          console.log('error', error);
          return Observable.throw(error);
        } else if (error.status === 401) {
          console.log('error', error);
          return Observable.throw(error);
        } else if (error.status === 404) {
          console.log('error', error);
          return Observable.throw(error);
        } else {
          return Observable.throw(error);
        }
      });
  }
  handleError(error: Response) {
    return Observable.throw(error);
  }

}
