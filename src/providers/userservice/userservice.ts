import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UtilProvider } from '../util/util';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/timeout';
/*

/*
  Generated class for the UserserviceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UserserviceProvider {
  host: string;
  formData: any = {
    first_name: "",
    last_name: "",
    phone: "",
    email: "",
    password: "",
    emailVerified: true
  }
  constructor(public http: HttpClient, private util: UtilProvider) {
    this.host = util.getBaseUrl();
    console.log('Hello UserserviceProvider Provider');
  }

  // Register Method for Connexion
  register(e) {
    this.formData.first_name = e.first_name;
    this.formData.last_name = e.first_name;
    this.formData.phone = e.phone;
    this.formData.email = e.email;
    this.formData.password = e.password;

    const urlheaders = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');

    return this.http.post(this.host + 'api/users', this.formData, { headers: urlheaders }).timeout(30000)
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
  signIN(e) {
    const urlheaders = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');
    return this.http.post(this.host + 'api/users/login', e, { headers: urlheaders }).timeout(30000)
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
