import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { ViagensPage } from '../../modulo-viagens/viagens/viagens';
import { StorageProvider } from '../../../providers/storage/storage';


@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  storages;
  listaAuth: any[];

  constructor(public navCtrl: NavController,
      public navParams: NavParams,
      public storageProvider: StorageProvider,
      public storage: Storage) {

  }


   ionViewDidEnter() {
    // this.storageProvider.listarAuth().then(res => {
    //   console.log(this.storageProvider.listarAuth());
    // })
    console.log(this.storageProvider.listarAuth());
  }



  linkViagens() {
    this.navCtrl.push(ViagensPage);
  }
}
