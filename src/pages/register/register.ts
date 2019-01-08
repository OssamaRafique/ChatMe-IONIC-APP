import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { ChatPage } from '../chat/chat';



@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  userName:string = '';
  userPassword: string = '';
  constructor(private nativePageTransitions: NativePageTransitions,public navCtrl: NavController, public navParams: NavParams, private toastCtrl: ToastController,private fauth: AngularFireAuth, private fdb: AngularFireDatabase) {
  }
  options: NativeTransitionOptions = {
    direction: 'up',
    duration: 500,
    slowdownfactor: 3,
    slidePixels: 20,
    iosdelay: 100,
    androiddelay: 150,
    fixedPixelsTop: 0,
    fixedPixelsBottom: 60
   };
  presentToast(message:string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 4000,
      position: 'bottom',
      showCloseButton: true,
    });
    toast.present();
  }
  btnRegister(){
    if(this.userName==''){
      this.presentToast('Username must not be empty');
    } else if(this.userPassword==''){
      this.presentToast('Password must not be empty');
    } else {
      this.fauth.auth.createUserWithEmailAndPassword(this.userName+'@mytestapp.bba',this.userPassword).then(
        data => {
          this.presentToast('You are successfully Registered!');
            this.navCtrl.push(HomePage).then(() => {
              const index = this.navCtrl.getActive().index;
              this.navCtrl.remove(index-1);
              this.navCtrl.remove(index-2);
          })
        }
      )
      .catch(error=>{
        this.presentToast(error.message);
      })
    }
  }
  ionViewDidLoad(){
    
  }
  openLogin(){
    this.nativePageTransitions.slide(this.options);
    this.navCtrl.push(HomePage);
  }

}
