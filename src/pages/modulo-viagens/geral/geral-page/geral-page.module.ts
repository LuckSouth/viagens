import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GeralPage } from './geral-page';


@NgModule({
  declarations: [
    GeralPage,
  ],
  imports: [
    IonicPageModule.forChild(GeralPage),
  ],
})
export class GeralPageModule {}
