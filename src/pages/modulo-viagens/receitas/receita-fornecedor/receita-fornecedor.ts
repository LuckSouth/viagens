import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-receita-fornecedor',
  templateUrl: 'receita-fornecedor.html',
})
export class ReceitasFornecedorPage {

  fornecedorOrigem: string = "";
  fornecedorDestino: string = "";
  produto: string = "";
  tipoPagmt: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
 
valida() {
    if (this.fornecedorOrigem == "" || this.fornecedorDestino == "" || this.produto == "" || this.tipoPagmt == "") {
      return false;
    } else {
      return true;
    }
  }
}
