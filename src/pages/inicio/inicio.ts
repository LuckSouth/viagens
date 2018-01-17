import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorageProvider } from '../../providers/storage/storage';


@IonicPage()
@Component({
  selector: 'page-inicio',
  templateUrl: 'inicio.html',
})
export class InicioPage {

  storages: any[];

  constructor(public navCtrl: NavController, 
      public navParams: NavParams,
      public storageProvider: StorageProvider) {
  }

  ionViewDidLoad() {
    this.storages = this.storageProvider.listarAuth();
    console.log(this.storageProvider.listarAuth());
  }

}
