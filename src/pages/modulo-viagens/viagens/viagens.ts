import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RotasAbastecimentoPage } from '../abastecimento/rotas-abastecimento/rotas-abastecimento';
import { GeralPage } from '../geral/geral-page/geral-page';
import { DespesasPage } from '../despesas/despesas/despesas';
import { RotasArlaPage } from '../arla-32/rotas-arla/rotas-arla';
import { RotasReceitasPage } from '../receitas/rotas-receitas/rotas-receitas';
import { RelatoriosPage } from '../relatorios/relatorios';
import { DadosProvider } from "../../../providers/dados/dados";
import { Network } from "@ionic-native/network";
@IonicPage()
@Component({
  selector: 'page-viagens',
  templateUrl: 'viagens.html',
})
export class ViagensPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public dados: DadosProvider,
    public network: Network) {
  }





  linkAbastecimento() {
    this.navCtrl.push(RotasAbastecimentoPage);
  }

  linkReceitas() {
    this.navCtrl.push(RotasReceitasPage);
  }

  linkDespesas() {
    this.navCtrl.push(DespesasPage);
  }

  linkArla32() {
    this.navCtrl.push(RotasArlaPage);
  }

  linkGeral() {
    this.navCtrl.push(GeralPage);
  }

  linkRelatorios() {
    this.navCtrl.push(RelatoriosPage);
  }



  ionViewDidLoad() {
    if (this.network.type === 'wifi') {
      console.log('we got a wifi connection, woohoo!');
    }
    if (this.network.type === 'ethernet') {
      console.log('we got a ethernet connection, woohoo!');
    }else{
      console.log('A net afundou')
    }

   }

}
