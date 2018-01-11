import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { FirebaseProvider } from "../../../../providers/firebase/firebase";
import { StorageProvider } from '../../../../providers/storage/storage';

@IonicPage()
@Component({
  selector: 'arla-pag-page',
  templateUrl: 'arla-pag.html',
})
export class ArlaPagPage {


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public firebaseProvider: FirebaseProvider,
    public storageProvider: StorageProvider) {
  }


  valida() {

    if (this.storageProvider.arla.litrosArla == "" || this.storageProvider.arla.litrosPrecoArla == "" || this.storageProvider.arla.selectArla == "") {
      return false;
    } else {
      return true;
    }
  }

  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Adicionado',
      subTitle: 'Arla32 Adicionado',
      buttons: ['OK']
    });
    alert.present();
  }
}
