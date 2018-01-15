import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StorageProvider } from '../../../../providers/storage/storage';

@IonicPage()
@Component({
  selector: 'page-abastecimento-relatorios',
  templateUrl: 'abastecimento-relatorios.html',
})
export class AbastecimentoRelatoriosPage {

  storages;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public storageProvider: StorageProvider) {
  }

  ionViewDidLoad() {
    this.storages = this.storageProvider.listar();

  }

}
