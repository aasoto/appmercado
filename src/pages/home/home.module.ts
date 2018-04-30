import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import { NuevoproductoPage } from '../nuevoproducto/nuevoproducto';

@NgModule({
  declarations: [
    HomePage,
    NuevoproductoPage
  ],
  imports: [
    IonicPageModule.forChild(HomePage),
  ],
})
export class HomePageModule {}