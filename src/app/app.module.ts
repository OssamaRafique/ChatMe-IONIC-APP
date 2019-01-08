import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { NativePageTransitions, NativeTransitionOptions } from '@ionic-native/native-page-transitions';
import { MyApp } from './app.component';
import { AngularFireModule } from '@angular/fire';
import { HomePage } from '../pages/home/home';
import { RegisterPage } from '../pages/register/register';
import { ChatPage } from '../pages/chat/chat';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';

const firebaseAuth = {
  apiKey: "AIzaSyBGujeLyQ-p3zaZMPVaV4ffg_7Iktlk-GM",
  authDomain: "chatme-64896.firebaseapp.com",
  databaseURL: "https://chatme-64896.firebaseio.com",
  projectId: "chatme-64896",
  storageBucket: "chatme-64896.appspot.com",
  messagingSenderId: "899100184897"
};
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RegisterPage,
    ChatPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseAuth),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    RegisterPage,
    ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    NativePageTransitions,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {
  
}
