import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from "../../../../providers/firebase/firebase";
import { Storage } from '@ionic/storage';
import { StorageProvider } from '../../../../providers/storage/storage';

@IonicPage()
@Component({
  selector: 'arla-posto-page',
  templateUrl: 'arla-posto.html',
})
export class ArlaPostoPage {
  
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public firebaseProvider: FirebaseProvider,
    public storageProvider: StorageProvider) {
  }
  valida() {

    if (this.storageProvider.arla.km == "" || this.storageProvider.arla.dataArla == "" || this.storageProvider.arla.postoArla == "") {
    } else {
      return true;
    }
  }
}
