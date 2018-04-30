import { NgForm } from "@angular/forms";
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { AutenticacionService } from "../../servicios/autenticacion.service";

/**
 * Generated class for the IniciarsesionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-iniciarsesion',
  templateUrl: 'iniciarsesion.html',
})
export class IniciarsesionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public autenticacionService:AutenticacionService, public alertCtrl:AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad IniciarsesionPage');
  }

  iniciarSesion(formulario: NgForm){
    this.autenticacionService.iniciarSesion(formulario.value.correo, formulario.value.clave)
    .then( info => console.log('Usuario conectado'))
    .catch(error => {
      let alerta = this.alertCtrl.create({
        title: 'Ocurrió un error',
        message: 'Ocurrió un error iniciando sesión: ' + error,
        buttons: ['OK']
      })
      alerta.present();
    })
      }

   registrarUsuario(formulario: NgForm){
   		this.autenticacionService.registrarUsuario(formulario.value.correo, formulario.value.clave)
   		.then(info => console.log(info) )
    	.catch(error => {
      	let alerta = this.alertCtrl.create({
        title: 'Ocurrió un error',
        message: 'Ocurrió un error registrando el usuario: ' + error,
        buttons: ['OK']
      })
      alerta.present();
    })
    }

}
