import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-abastecimento-pagamento',
  templateUrl: 'abastecimento-pagamento.html',
})
export class AbastecimentoPagamentoPage {
  pagamento: string = "";
  data: string = "";
  tipo: string = "";
  posto: string = "";

  constructor(public navCtrl: NavController) {

  }

  valida() {

    if (this.posto.length < 3 || this.tipo == "" || this.pagamento == "" || this.data == "") {
      return false;
    } else {
      return true;
    }
    
  }

}
