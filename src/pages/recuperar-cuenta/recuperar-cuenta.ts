import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IniciarsesionPage } from '../iniciarsesion/iniciarsesion';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RecuperarCuentaPage');
  }
  goToLogin(params){
    if (!params) params = {};  
    this.navCtrl.push(IniciarsesionPage);}
    
    
}
