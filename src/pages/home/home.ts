import { Component } from '@angular/core';
import { NavController, MenuController } from 'ionic-angular';

import { NuevoproductoPage } from '../nuevoproducto/nuevoproducto';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  nuevoproducto = NuevoproductoPage;
  constructor(public navCtrl: NavController) {

  }

  goToNuevoproducto(params){
    if (!params) params = {};
    this.navCtrl.push(NuevoproductoPage);
  }
}
