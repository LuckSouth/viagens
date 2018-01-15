import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { StorageProvider } from '../../../../providers/storage/storage';
import { DespesasRelatoriosPage } from '../despesas-relatorios/despesas-relatorios';
import { ReceitasRelatoriosPage } from '../receitas-relatorios/receitas-relatorios';
import { ArlaRelatoriosPage } from '../arla-relatorios/arla-relatorios';
import { AbastecimentoRelatoriosPage } from '../abastecimento-relatorios/abastecimento-relatorios';



@IonicPage()
@Component({
  selector: 'page-relatorios',
  templateUrl: 'relatorios.html',
})
export class RelatoriosPage {


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public storageProvider: StorageProvider
  ) {}

  relatoriosDespesas = DespesasRelatoriosPage;
  relatoriosReceitas = ReceitasRelatoriosPage;
  relatoriosArla = ArlaRelatoriosPage;
  relatoriosAbastecimento = AbastecimentoRelatoriosPage;


}
