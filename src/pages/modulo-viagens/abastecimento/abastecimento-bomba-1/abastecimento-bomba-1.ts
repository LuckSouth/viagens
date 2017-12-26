import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FirebaseProvider } from '../../../../providers/firebase/firebase';

@IonicPage()
@Component({
  selector: 'page-abastecimento-bomba-1',
  templateUrl: 'abastecimento-bomba-1.html',
})
export class AbastecimentoBomba1Page {
  preco: string = "";
  litros: string = "";

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public firebaseProvider: FirebaseProvider) {
  }

  valida() {

    if (this.preco == "" || this.litros == "") {
      return false;
    }else{
      return true;
    }
  }

}
