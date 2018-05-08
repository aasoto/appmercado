import { ViewChild } from '@angular/core';
import { Component } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';

import firebase from 'firebase';

import { HomePage } from '../pages/home/home';
import { IniciarsesionPage } from "../pages/iniciarsesion/iniciarsesion";
import { EstadisticasPage } from '../pages/estadisticas/estadisticas';
import { UbicacionPage } from '../pages/ubicacion/ubicacion';
import { NuevoproductoPage } from '../pages/nuevoproducto/nuevoproducto';

import { AutenticacionService } from "../servicios/autenticacion.service";


import { AngularFireAuth } from 'angularfire2/auth';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;
  homepage = HomePage;
  iniciarSesion = IniciarsesionPage;
  estadisticas = EstadisticasPage;
  ubicacion = UbicacionPage;
  nuevoproducto = NuevoproductoPage;
  @ViewChild('contenido') contenido:NavController;
    
  usuarioEstaConectado = false;
  
  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
     public menuCtrl:MenuController, public autenticacionService:AutenticacionService
    , private afAuth: AngularFireAuth, 
      private splashscreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
   /* this.afAuth.authState.subscribe(auth => {
      if(!auth)
        this.rootPage = IniciarsesionPage;//si el usuario
      else
        this.rootPage = HomePage;//pa
    });*/
    //firebase.initializeApp({
      //    apiKey: "AIzaSyBGvL5ByDIJwFXmZSBSOzhzREAXPayPcjc",
        //  authDomain: "fir-auth-53ece.firebaseapp.com",
        //});

    firebase.auth().onAuthStateChanged(usuario=>{
      if(usuario != null){
        this.usuarioEstaConectado = true;
        this.contenido.setRoot(this.homepage);
      }else{
        this.usuarioEstaConectado = false;
        this.contenido.setRoot(this.iniciarSesion);
          }
      })


  }

  llamarPagina(pagina){
    this.contenido.setRoot(pagina);
    this.menuCtrl.close();
  }

  terminarSesion(){
    this.autenticacionService.terminarSesion();
    this.menuCtrl.close();
  }

  goToListaDeCompras(params){
    if (!params) params = {};
    this.contenido.setRoot(HomePage);
    this.menuCtrl.close();
  }goToEstadisticas(params){
    if (!params) params = {};
    this.contenido.setRoot(EstadisticasPage);
    this.menuCtrl.close();
  }goToUbicacion(params){
    if (!params) params = {};
    this.contenido.setRoot(UbicacionPage);
    this.menuCtrl.close();
  }goToNuevoproducto(params){
    if (!params) params = {};
    this.contenido.push(NuevoproductoPage);
    this.menuCtrl.close();
  }
  /*
  constructor(platform: Platform, private afAuth: AngularFireAuth, 
    private statusBar: StatusBar, private splashscreen: SplashScreen) {
    this.afAuth.authState.subscribe(auth => {
      if(!auth)
        this.rootPage = IniciarsesionPage;//si el usuario
      else
        this.rootPage = HomePage;//pa
    });
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashscreen.hide();
    });
  }*/


}

