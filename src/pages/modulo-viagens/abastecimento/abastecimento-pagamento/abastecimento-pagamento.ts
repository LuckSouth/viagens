import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { FirebaseProvider } from '../../../../providers/firebase/firebase';


@IonicPage()
@Component({
  selector: 'page-abastecimento-pagamento',
  templateUrl: 'abastecimento-pagamento.html',
})
export class AbastecimentoPagamentoPage {


  constructor(public navCtrl: NavController,
    public firebaseProvider: FirebaseProvider) {

  }

  valida() {

    if (this.firebaseProvider.tipoAbastecimento.length < 3 || this.firebaseProvider.postoAbastecimento == "" || this.firebaseProvider.dataAbastecimento == "" || this.firebaseProvider.tipoPagmtAbastecimento == "") {
      return false;
    } else {
      return true;
    }
    
  }

}
