import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { IniciarsesionPage } from "../pages/iniciarsesion/iniciarsesion";
import { EstadisticasPage } from '../pages/estadisticas/estadisticas';
import { UbicacionPage } from '../pages/ubicacion/ubicacion';
import { NuevoproductoPage } from '../pages/nuevoproducto/nuevoproducto';

import { AutenticacionService } from "../servicios/autenticacion.service";
import { RecuperarCuentaPage } from '../pages/recuperar-cuenta/recuperar-cuenta';
import { CrearcuentaPage } from '../pages/crearcuenta/crearcuenta';

//npm install firebase angularfire2 --save


import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

var config = {
  apiKey: "AIzaSyCsAy6V1cGFouRoxlRC4doVlctOMrevIMw",
  authDomain: "proyectomovil-278f9.firebaseapp.com",
  databaseURL: "https://proyectomovil-278f9.firebaseio.com",
  projectId: "proyectomovil-278f9",
  storageBucket: "proyectomovil-278f9.appspot.com",
  messagingSenderId: "123988444428"
};

@NgModule({
  declarations: [


    MyApp,
    HomePage,
    IniciarsesionPage,
    EstadisticasPage,
    UbicacionPage,
    NuevoproductoPage,
    RecuperarCuentaPage,
    CrearcuentaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    IniciarsesionPage,
    EstadisticasPage,
    UbicacionPage,
    NuevoproductoPage,
    RecuperarCuentaPage,
    CrearcuentaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AutenticacionService,
    Geolocation
  ]
})
export class AppModule {}
