import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

import { FirebaseProvider } from '../../../../providers/firebase/firebase';


@IonicPage()
@Component({
  selector: 'page-abastecimento-odometro',
  templateUrl: 'abastecimento-odometro.html',
})
export class AbastecimentoOdometroPage {

  constructor(public navCtrl: NavController,
    public firebaseProvider: FirebaseProvider) {
  }

  valida() {
    
        if (this.firebaseProvider.odometro == "") {
          return false;
        }else{
          return true;
        }
        
    
      }
}
