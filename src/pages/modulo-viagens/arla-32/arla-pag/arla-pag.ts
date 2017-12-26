import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { FirebaseProvider } from "../../../../providers/firebase/firebase";
@IonicPage()
@Component({
  selector: 'arla-pag-page',
  templateUrl: 'arla-pag.html',
})
export class ArlaPagPage {

  litros: string = "";
  //total: string = "";
  litrosPreco: string = "";
  select: string = "";


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public firebaseProvider: FirebaseProvider) {
  }
  // preco(){
  //   return this.litros * this.litroPreco;
  // }

  valida() {

    if (this.firebaseProvider.litros == "" || this.firebaseProvider.litrosPreco == "" || this.firebaseProvider.select == "") {
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
