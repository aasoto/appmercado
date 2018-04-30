import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { IniciarsesionPage } from "../pages/iniciarsesion/iniciarsesion";
import { EstadisticasPage } from '../pages/estadisticas/estadisticas';
import { UbicacionPage } from '../pages/ubicacion/ubicacion';
import { NuevoproductoPage } from '../pages/nuevoproducto/nuevoproducto';

import { AutenticacionService } from "../servicios/autenticacion.service";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    IniciarsesionPage,
    EstadisticasPage,
    UbicacionPage,
    NuevoproductoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    IniciarsesionPage,
    EstadisticasPage,
    UbicacionPage,
    NuevoproductoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AutenticacionService
  ]
})
export class AppModule {}
