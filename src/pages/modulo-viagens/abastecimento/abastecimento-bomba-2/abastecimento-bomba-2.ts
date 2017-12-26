import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { AlertController } from 'ionic-angular'; 

import { FirebaseProvider } from '../../../../providers/firebase/firebase';


@IonicPage()
@Component({
  selector: 'page-abastecimento-bomba-2',
  templateUrl: 'abastecimento-bomba-2.html',
})
export class AbastecimentoBomba2Page {
  preco: string = "";
  litros: string = "";

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public viewCtrl: ViewController,
    public firebaseProvider: FirebaseProvider) {
  }

  valida() {
    
        if (this.preco == "" || this.litros == "") {
          return false;
        }else{
          return true;
        }
      }

  
}
