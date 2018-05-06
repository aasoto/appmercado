import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RecuperarCuentaPage } from './recuperar-cuenta';
import { NavController } from 'ionic-angular';
import { IniciarsesionPage } from '../iniciarsesion/iniciarsesion';

@NgModule({
  declarations: [
    RecuperarCuentaPage,
  ],
  imports: [
    IonicPageModule.forChild(RecuperarCuentaPage),
  ],
})
export class RecuperarCuentaPageModule {
  constructor(public navCtrl: NavController) {
  }

  goToLogin(params){
    if (!params) params = {};
    this.navCtrl.push(IniciarsesionPage);
  }
}
