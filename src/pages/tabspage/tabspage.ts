import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { KioskPage } from '../kiosk/kiosk';
import { SettingPage } from '../setting/setting';

/**
 * Generated class for the TabspagePage tabs.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tabspage',
  templateUrl: 'tabspage.html'
})
export class TabspagePage {

  root: typeof HomePage;
  homeRoot = HomePage
  kioskRoot = KioskPage
  settingRoot = SettingPage


  constructor(public navCtrl: NavController) {
    
  }

}
