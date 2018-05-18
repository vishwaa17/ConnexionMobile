import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Toast, ToastController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { regexValidators } from '../validation/validation';
import { RegisterPage } from '../register/register';
import { ForgetpasswordPage } from '../forgetpassword/forgetpassword';
import { UserserviceProvider } from '../../providers/userservice/userservice';
import { WelcomePage } from '../welcome/welcome';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  credentialsForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder,
    private loginService: UserserviceProvider, private toast: ToastController) {

    this.credentialsForm = this.formBuilder.group({
      email: [
        '', Validators.compose([
          Validators.pattern(regexValidators.email),
          Validators.required
        ])
      ],
      password: [
        '', Validators.compose([
          Validators.pattern(regexValidators.password),
          Validators.required
        ])
      ],
    });
  }

  onSignIn(e) {
    this.loginService.signIN(e).subscribe((data) => {
      console.log(data);
      this.navCtrl.push(WelcomePage);
    },
      err => {
        var error = JSON.stringify(err.error);
        var errorMessage = JSON.parse(error);
        console.log('Inside function',errorMessage.error)
        this.showToastMessage(errorMessage.error.message);
      })

  }
  showToastMessage = function (error: any) {
    let toast = this.toast.create({
      message: error.toUpperCase(),
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }


  onForgotPassword() {
    //  this.navCtrl.push(ForgetpasswordPage)

  }
  onRegister = function () {
    this.navCtrl.push(RegisterPage);
  }

}
