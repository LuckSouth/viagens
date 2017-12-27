import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FirebaseProvider } from '../../../../providers/firebase/firebase';



@IonicPage()
@Component({
  selector: 'page-receitas-qnt',
  templateUrl: 'receitas-qnt.html',
})
export class ReceitasQntPage {



  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseProvider: FirebaseProvider) {

  }

  valida() {

    if (!(this.firebaseProvider.idUnidadeMedida == "cx" || this.firebaseProvider.idUnidadeMedida == undefined || this.firebaseProvider.idUnidadeMedida == "bd"))  { 
      if (this.firebaseProvider.idUnidadeMedida == "" || this.firebaseProvider.qntFaturado == "" || this.firebaseProvider.qntDescarregado == "" || this.firebaseProvider.valorUnitario == "") {
        return false
      } else {
        return true
      }

    }else{
      if (this.firebaseProvider.idUnidadeMedida == "" || this.firebaseProvider.idUnidadeBandeja == "" && this.firebaseProvider.caixa == "" || this.firebaseProvider.qntFaturado == "" || this.firebaseProvider.qntDescarregado == "" || this.firebaseProvider.valorUnitario == "") {
        return false
      } else {
        return true
      }

    }


  }

  apareceBandeja() {
    if (this.firebaseProvider.idUnidadeMedida == 'bd') {
      return true;
    } else {
      return false;
    }
  }

  apareceCaixa() {
    if (this.firebaseProvider.idUnidadeMedida == 'cx') {
      return true;
    } else {
      return false;
    }
  }
}
