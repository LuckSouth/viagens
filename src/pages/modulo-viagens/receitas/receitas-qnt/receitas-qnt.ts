import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-receitas-qnt',
  templateUrl: 'receitas-qnt.html',
})
export class ReceitasQntPage {

  idUnidadeMedida: string = "";
  idUnidadeBandeja: string = "";
  caixa: string = "";
  qntFaturado: string = ""; 
  qntDescarregado: string = "";
  valorUnitario: string = "";
  valorTotal: string = "";
  
  // preco(){
  //   return  this.valorUnitario * this.qntDescarregado
  // }

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  valida() {
    if (this.idUnidadeMedida == "" || this.idUnidadeBandeja == "" && this.caixa == "" || this.qntFaturado == "" || this.qntDescarregado == "" || this.valorUnitario == "") {
        return false
      } else {
        return true
      }
  }
  
  apareceBandeja() {
    if (this.idUnidadeMedida == 'bd') {
      return true;
    } else {
      return false;
    }
  }

  apareceCaixa() {
    if (this.idUnidadeMedida == 'cx') {
      return true;
    } else {
      return false;
    }
  }
}
