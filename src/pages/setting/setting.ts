import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UtilProvider } from '../../providers/util/util';

/**
 * Generated class for the SettingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  host: string;
  showSpinner: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams,
  private util: UtilProvider) {
    this.host = this.util.getBaseUrl();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SettingPage');
  }
  onLogoutCalled(){
    this.showSpinner = true;
    
  }
}
