import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FirebaseProvider } from '../../../../providers/firebase/firebase';

@IonicPage()
@Component({
  selector: 'page-receita-fornecedor',
  templateUrl: 'receita-fornecedor.html',
})
export class ReceitasFornecedorPage {


  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseProvider: FirebaseProvider) {

  }
 
valida() {
    if (this.firebaseProvider.fornecedorOrigem == "" || this.firebaseProvider.fornecedorDestino == "" || this.firebaseProvider.produto == "" || this.firebaseProvider.tipoPagmt == "") {
      return false;
    } else {
      return true;
    }
  }
}
