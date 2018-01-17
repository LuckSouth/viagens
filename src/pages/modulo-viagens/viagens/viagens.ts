import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RotasAbastecimentoPage } from '../abastecimento/rotas-abastecimento/rotas-abastecimento';
import { GeralPage } from '../geral/geral-page/geral-page';
import { DespesasPage } from '../despesas/despesas/despesas';
import { RotasArlaPage } from '../arla-32/rotas-arla/rotas-arla';
import { RotasReceitasPage } from '../receitas/rotas-receitas/rotas-receitas';
import { RelatoriosPage } from '../relatorios/relatorios-page/relatorios';
import { StorageProvider } from '../../../providers/storage/storage';

@IonicPage()
@Component({
  selector: 'page-viagens',
  templateUrl: 'viagens.html',
})
export class ViagensPage {

  storages;

  constructor(public navCtrl: NavController, 
      public navParams: NavParams,
      public storageProvider: StorageProvider) {
  }


  ionViewDidLoad() {
    console.log(this.storageProvider.listarAuth());
  }


  linkAbastecimento(){
    this.navCtrl.push(RotasAbastecimentoPage);
  }

  linkReceitas(){
    this.navCtrl.push(RotasReceitasPage);
  }
  
  linkDespesas(){
      this.navCtrl.push(DespesasPage);
  }

  linkArla32(){
    this.navCtrl.push(RotasArlaPage);
  }

  linkGeral(){
    this.navCtrl.push(GeralPage);
  }
  
  linkRelatorios(){
    this.navCtrl.push(RelatoriosPage);
  }
  
}
