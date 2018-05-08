import { NgForm } from "@angular/forms";
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { AutenticacionService } from "../../servicios/autenticacion.service";


import { RecuperarCuentaPage } from "../recuperar-cuenta/recuperar-cuenta";
import { CrearcuentaPage } from "../crearcuenta/crearcuenta";
import { AngularFireAuth } from 'angularfire2/auth';
import {  ToastController } from 'ionic-angular';
import { HomePage } from "../home/home";



import * as firebase from 'firebase/app';
import { Facebook } from '@ionic-native/facebook';
import {  Platform } from 'ionic-angular';
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


  IniciarsesionData = {
      email: '',
      password: '' 
    } 

  constructor(public navCtrl: NavController, public navParams: NavParams,
     public autenticacionService:AutenticacionService,
      public alertCtrl:AlertController,
     private afAuth: AngularFireAuth,
     private toastCtrl: ToastController,
     private facebook: Facebook,
    private platform: Platform) {
  }
  

 
  ionViewDidLoad() { 
    console.log('ionViewDidLoad IniciarsesionPage');
  }
  loginGoogle(){
    this.afAuth.auth.signInWithPopup(new  firebase.auth.GoogleAuthProvider())
    .then( res=>{
      console.log("inicie con google")
    }).catch(error => {
      let alerta = this.alertCtrl.create({
        title: 'Ocurrió un error',
        message: 'Ocurrió un error iniciando sesión: ' + error,
        buttons: ['OK']
      })
      alerta.present(); 
    });


  }
  /*  
  loginFacebook1() { 
    this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
    .then((res) => console.log(res));
  }*/

  loginFacebook() {
    if (this.platform.is('cordova')) {    
      return this.facebook.login(['email', 'public_profile']).then(res => {
        const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
        return firebase.auth().signInWithCredential(facebookCredential);
      })
    }
    else {
      return this.afAuth.auth
        .signInWithPopup(new firebase.auth.FacebookAuthProvider())
        .then(res => console.log(res))
        
    .catch(error => {
      let alerta = this.alertCtrl.create({
        title: 'Ocurrió un error',
        message: 'Ocurrió un error iniciando sesión: ' + error,
        buttons: ['OK']
      })
      alerta.present(); 
    })
    }
  }
/*
  signInWithFacebook() {
    if (this.platform.is('cordova')) {
      return this.facebook.login(['email', 'public_profile']).then(res => {
        const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken);
        return firebase.auth().signInWithCredential(facebookCredential);
      })
    }
    else {
      return this.afAuth.auth
        .signInWithPopup(new firebase.auth.FacebookAuthProvider())
        .then(res => console.log(res))
        
    .catch(error => {
      let alerta = this.alertCtrl.create({
        title: 'Ocurrió un error',
        message: 'Ocurrió un error iniciando sesión: ' + error,
        buttons: ['OK']
      })
      alerta.present(); 
    })
    }
  }*/

  goToRecuperarCuenta(params){
    if (!params) params = {};
    this.navCtrl.push(RecuperarCuentaPage, { email: this.IniciarsesionData.email });
  //  this.navCtrl.push(RecuperarCuentaPage);
    console.log("le envie el correo"+this.IniciarsesionData.email);
  }
  goToCrearCuenta(params){
   // if (!params) params = {};
    //this.navCtrl.push(CrearcuentaPage);
    this.navCtrl.push(CrearcuentaPage, { email: this.IniciarsesionData.email });
   }  

   signup() {
    this.navCtrl.push(CrearcuentaPage, { email: this.IniciarsesionData.email });
  }
   
  login() {
    this.afAuth.auth.signInWithEmailAndPassword(this.IniciarsesionData.email, 
      this.IniciarsesionData.password)
    .then(auth => {
      console.log("acabo de iniciar sesion");
      this.navCtrl.push(HomePage);
    })
    .catch(error => {
      let alerta = this.alertCtrl.create({
        title: 'Ocurrió un error',
        message: 'Ocurrió un error iniciando sesión: ' + error,
        buttons: ['OK']
      })
      alerta.present(); 
    })
  }
  
  


  iniciarSesion(){
    this.autenticacionService.iniciarSesion(this.IniciarsesionData.email,
       this.IniciarsesionData.email)
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
    /*  
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
   }*/

}
