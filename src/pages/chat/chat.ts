import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private toastCtrl: ToastController, private fauth: AngularFireAuth, private fdb: AngularFireDatabase) {
  }
  presentToast(message:string) {
    let toast = this.toastCtrl.create({
      message: message,
      duration: 4000,
      position: 'bottom',
      showCloseButton: true,
    });
    toast.present();
  }
  ionViewDidLoad() {
    if (this.fauth.auth.currentUser==null) {
      this.navCtrl.push(HomePage);
    }
  }
}
