import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {  AlertController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';

/**
 * Generated class for the CrearcuentaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-crearcuenta',
  templateUrl: 'crearcuenta.html',
})
export class CrearcuentaPage {
  signupData = {
    email: '',
    password: '',
    passwordRetyped: ''
  }; 

  constructor(
    private navCtrl: NavController,
    private navParams: NavParams,
    private alertCtrl: AlertController,
    private afAuth: AngularFireAuth) {
    this.signupData.email = this.navParams.get('email');
  }

  registrar() {
    if(this.signupData.password !== this.signupData.passwordRetyped) {
      let alert = this.alertCtrl.create({
        title: 'Error',
        message: 'Las contraseñas no coinciden.',
        buttons: ['OK']  
      }); 
      alert.present();
      return;
    }
    else{
      
    }

    // Firebase Signup Code
    this.afAuth.auth.createUserWithEmailAndPassword(this.signupData.email, this.signupData.password)
    .then(auth => {
      this.navCtrl.push(HomePage);
      console.log(auth);
    })
    .catch(err => {
      // Handle error
      let alert = this.alertCtrl.create({
        title: 'Error',
        message: err.message,
        buttons: ['OK']
      });
      alert.present();
    });
      
  }
}