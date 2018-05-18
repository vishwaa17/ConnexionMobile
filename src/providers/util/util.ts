import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the UtilProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class UtilProvider {
  host: string = 'https://api.dev.connexionht.com/';
  constructor(public http: HttpClient) { }

  getBaseUrl(){
    return this.host;
  }
}
