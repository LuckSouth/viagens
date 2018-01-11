import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AlertController } from 'ionic-angular'; 

import { FirebaseProvider } from '../../../../providers/firebase/firebase';
import { StorageProvider } from '../../../../providers/storage/storage';


@IonicPage()
@Component({
  selector: 'page-abastecimento-bomba-2',
  templateUrl: 'abastecimento-bomba-2.html',
})
export class AbastecimentoBomba2Page {
 

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public viewCtrl: ViewController,
    public storageProvider: StorageProvider) {
  }

  valida() {
    
        if (this.storageProvider.abastecimento.litrosBomb2 == "" || this.storageProvider.abastecimento.precoBomb2 == "") {
          return false;
        }else{
          return true;
        }
      }

  
}
