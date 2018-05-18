import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { HomePage } from '../home/home';
import { TabspagePage } from '../tabspage/tabspage';

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
})
export class WelcomePage {
  @ViewChild(Slides) slides: Slides;
  username : string = "";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.username ="Jason"
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
  }
  tabsPage = function () {
//    this.storage.set('isFirstTimeUser', false);
    // this.navCtrl.push(TabsPage);
    this.navCtrl.push(TabspagePage)
  }
  goToSlide() {
    this.slides.slideNext();
  }

}
