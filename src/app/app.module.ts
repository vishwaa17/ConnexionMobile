import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserserviceProvider } from '../providers/userservice/userservice';
import { LoginPage } from '../pages/login/login';
import { HttpClientModule } from '@angular/common/http';
import { RegisterPage } from '../pages/register/register';
import { ForgetpasswordPage } from '../pages/forgetpassword/forgetpassword';
import { MobileotpProvider } from '../providers/mobileotp/mobileotp';
import { UtilProvider } from '../providers/util/util';
import { WelcomePage } from '../pages/welcome/welcome';
import { TabspagePage } from '../pages/tabspage/tabspage';
import { KioskPage } from '../pages/kiosk/kiosk';
import { SettingPage } from '../pages/setting/setting';

@NgModule({
  declarations: [
    MyApp,
    // HomePage,
    // LoginPage,
    // ListPage,
    // RegisterPage,
    // ForgetpasswordPage,
    // WelcomePage,
    // TabspagePage,
    // KioskPage,
    // SettingPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ForgetpasswordPage,
    WelcomePage,
    TabspagePage,
    KioskPage,
    SettingPage  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UserserviceProvider,
    MobileotpProvider,
    UtilProvider,
  ]
})
export class AppModule {}
