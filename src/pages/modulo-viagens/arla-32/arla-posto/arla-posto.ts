import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseProvider } from "../../../../providers/firebase/firebase";

@IonicPage()
@Component({
  selector: 'arla-posto-page',
  templateUrl: 'arla-posto.html',
})
export class ArlaPostoPage {
  
  constructor(public navCtrl: NavController, public navParams: NavParams,public firebaseProvider: FirebaseProvider) {
  }
  valida() {

    if (this.firebaseProvider.dataArla == "" || this.firebaseProvider.tipoArla == "" || this.firebaseProvider.postoArla == "" || this.firebaseProvider.km == "") {
      return false;
    } else {
      return true;
    }
  }
}
