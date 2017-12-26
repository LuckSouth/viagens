import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FirebaseProvider } from '../../../../providers/firebase/firebase';

@IonicPage()
@Component({
  selector: 'page-abastecimento-bomba-1',
  templateUrl: 'abastecimento-bomba-1.html',
})
export class AbastecimentoBomba1Page {


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public firebaseProvider: FirebaseProvider) {
  }

  valida() {

    if (this.firebaseProvider.precoBomb1 == "" || this.firebaseProvider.litrosBomb1 == "") {
      return false;
    }else{
      return true;
    }
  }

}
