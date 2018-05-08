import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IniciarsesionPage } from '../iniciarsesion/iniciarsesion';
import { AngularFireAuth } from 'angularfire2/auth';
/**
 * Generated class for the RecuperarCuentaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-recuperar-cuenta',
  templateUrl: 'recuperar-cuenta.html',
})
export class RecuperarCuentaPage {
  signupData = {
    email: '',
    password: '',
    passwordRetyped: ''
  };  
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private afAuth: AngularFireAuth,) {

    console.log(this. signupData.email);
    this. signupData.email = this.navParams.get('email');
    console.log(this. signupData.email);

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecuperarCuentaPage');
  }
  /*
  goToLogin(params){
    if (!params) params = {};  
    //this.navCtrl.push(IniciarsesionPage);
    this.navCtrl.pop();
    console.log("envie correo a "+this.signupData.email)
    this.afAuth.auth.sendPasswordResetEmail(this.signupData.email);
  }*/
    goToLogin(params){
      if (!params) params = {};  
      //this.navCtrl.push(IniciarsesionPage);
      this.navCtrl.pop();
      console.log("envie correo a "+this.signupData.email)
      this.afAuth.auth.sendPasswordResetEmail(this.signupData.email).then(function() {
        // Email sent.
        console.log("envie correo a "+this.signupData.email);
        this.navCtrl.Pop();
      }).catch(function(error) {
        // An error happened.
      });
      }
      
    
}

