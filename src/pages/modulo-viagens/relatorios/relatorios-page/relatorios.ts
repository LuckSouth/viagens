import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { StorageProvider } from '../../../../providers/storage/storage';


@IonicPage()
@Component({
  selector: 'page-relatorios',
  templateUrl: 'relatorios.html',
})
export class RelatoriosPage {


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public storageProvider: StorageProvider
  ) {
  }

}
