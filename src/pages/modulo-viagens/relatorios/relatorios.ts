import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FirebaseProvider } from '../../../providers/firebase/firebase';
import { AngularFireDatabase } from "angularfire2/database-deprecated";

import { StorageProvider } from '../../../providers/storage/storage'


@IonicPage()
@Component({
  selector: 'page-relatorios',
  templateUrl: 'relatorios.html',
})
export class RelatoriosPage {

  storages;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public banco: AngularFireDatabase,
    public firebaseProvider: FirebaseProvider,
    public storageProvider: StorageProvider
  ) {
  }

  ionViewDidEnter() {
    this.storages = this.storageProvider.listar();
  }
}
