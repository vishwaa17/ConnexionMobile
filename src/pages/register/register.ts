import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, ModalController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { regexValidators } from '../validation/validation';
import { MobileotpProvider } from '../../providers/mobileotp/mobileotp';
import { UserserviceProvider } from '../../providers/userservice/userservice';
import { WelcomePage } from '../welcome/welcome';
import { LoginPage } from '../login/login';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  responseStatus: any;
  mobileNum: number;
  verifyotp: number;
  mobileno: number;
  isenabled: boolean = true;
  registerForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder,
    private otpservice: MobileotpProvider, private toast: ToastController, 
    private registerService: UserserviceProvider,
    private modlCtrl: ModalController
  ) {
    this.registerForm = this.formBuilder.group({
      first_name: [],
      last_name: [],
      mobile: [],
      verifyotp: [],
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

  register(e) {
    this.registerService.register(e).subscribe((res: Response) => {
      console.log(res, 'Here I am in');
      var resp = JSON.parse(JSON.stringify(res));
      //console.log(res.headers, )
      if (resp.id) {
        console.log('Registration Done Successfully', );
        let toast = this.toast.create({
          message: 'Registration done Successfully.Please verify Email and Login.',
          duration: 5000,
          position: 'bottom'
        });

        toast.onDidDismiss(() => {
          console.log('Dismissed toast');
        });

        toast.present();
        this.navCtrl.push(LoginPage)
        //this.navCtrl.push(WelcomePage)
      }
      else if (resp.statusCode == 401) {
        let toast = this.toast.create({
          message: 'Mobile No. is not verified',
          duration: 3000,
          position: 'bottom'
        });

        toast.onDidDismiss(() => {
          console.log('Dismissed toast');
        });

        toast.present();
      }
      else if (resp.statusCode == 422) {
        let toast = this.toast.create({
          message: 'Email Id is already exist!',
          duration: 3000,
          position: 'bottom'
        });

        toast.onDidDismiss(() => {
          console.log('Dismissed toast');
        });

        toast.present();
      }
      else {
        let toast = this.toast.create({
          message: 'Please try again!',
          duration: 3000,
          position: 'bottom'
        });

        toast.onDidDismiss(() => {
          console.log('Dismissed toast');
        });

        toast.present();
      }
    })
  }
 
  sendOTP() {
    this.mobileNum = this.mobileno;
    console.log('Mobile', this.mobileNum);
    this.otpservice.sendOTP(this.mobileNum).subscribe((data) => {
      console.log(data);
      console.log(data.status, 'Status')
      if (data.message === "OTP Sent") {
        this.isenabled = false;
        let toast = this.toast.create({
          message: 'OTP Send',
          duration: 3000,
          position: 'bottom'
        });

        toast.onDidDismiss(() => {
          console.log('Dismissed toast');
        });

        toast.present();
      }
      else {
        console.log('some error');
      }
    })
  }
  verifyOTP() {
    this.verifyotp;
    this.otpservice.verifyOTP(this.mobileNum, this.verifyotp).subscribe((data) => {
      this.isenabled = true;
      if (data.message === 'Verified') {
        let toast = this.toast.create({
          message: 'OTP Verified',
          duration: 3000,
          position: 'bottom'
        });

        toast.onDidDismiss(() => {
          console.log('Dismissed toast');
        });

        toast.present();
      }
      else {
        console.log('some error');
      }
    })
  } resetRegister() {
    this.registerForm.reset();
  }
}
