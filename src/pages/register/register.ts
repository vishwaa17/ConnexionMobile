import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { regexValidators } from '../validation/validation';
import { MobileotpProvider } from '../../providers/mobileotp/mobileotp';
import { UserserviceProvider } from '../../providers/userservice/userservice';

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
  isenabled: boolean=true;
  registerForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder,
  private otpservice: MobileotpProvider,private toast: ToastController, private registerService: UserserviceProvider) {
    this.registerForm = this.formBuilder.group({
      first_name:[],
      last_name:[],
      mobile:[],
      verifyotp:[],
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

  register(e){
   this.registerService.register(e).subscribe((res:Response)=>{
     console.log(res,'Here I am in');
     this.responseStatus = res.status;
     console.log('The response',this.responseStatus)
   })
  }
  sendOTP(){
    this.mobileNum = this.mobileno;
    console.log('Mobile',this.mobileNum);
    this.otpservice.sendOTP(this.mobileNum).subscribe((data)=>{
      console.log(data);
      console.log(data.status,'Status')
      if(data.message === "OTP Sent"){
        this.isenabled =  false;
      let toast= this.toast.create({
        message: 'OTP Send',
        duration: 3000,
        position: 'bottom'
       });

       toast.onDidDismiss(() => {
        console.log('Dismissed toast');
      });
    
      toast.present();
      }
      else{
        console.log('some error');
      }
    })
  }
  verifyOTP(){
    this.verifyotp;
    this.otpservice.verifyOTP(this.mobileNum,this.verifyotp).subscribe((data)=>{
      this.isenabled =  true;
      if(data.message === 'Verified'){
        let toast= this.toast.create({
          message: 'OTP Verified',
          duration: 3000,
          position: 'bottom'
         });
  
         toast.onDidDismiss(() => {
          console.log('Dismissed toast');
        });
      
        toast.present();
        }
        else{
          console.log('some error');
        }
     })
    }
  }
