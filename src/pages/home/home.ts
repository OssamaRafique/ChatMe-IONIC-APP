import { Component } from '@angular/core';
import { NavController,ToastController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { ChatPage } from '../chat/chat';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  userName: string ='';
  userPassword: string = '';
  constructor(public navCtrl: NavController,private toastCtrl: ToastController,private nativePageTransitions: NativePageTransitions, private fauth: AngularFireAuth, private fdb: AngularFireDatabase) {
    
    
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
  btnLogin(){
    if(this.userName==''){
      this.presentToast('Username must not be empty');
    } else if(this.userPassword==''){
      this.presentToast('Password must not be empty');
    } else {
      this.fauth.auth.signInWithEmailAndPassword(this.userName+'@mytestapp.bba',this.userPassword).then(data=>{
        this.navCtrl.push(ChatPage).then(() => {
          const index = this.navCtrl.getActive().index;
          this.navCtrl.remove(index-1);
          this.navCtrl.remove(index-2);
        })
      })
      .catch(error=>{
        this.presentToast(error.message);
      })
    }
  }
  ionViewDidLoad(){
    
  }
  openRegister(){
    this.nativePageTransitions.slide(this.options);
    this.navCtrl.push(RegisterPage);
  }
}
