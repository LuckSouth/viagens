import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ViagensPage } from '../../modulo-viagens/viagens/viagens'; 
import { FirebaseProvider } from '../../../providers/firebase/firebase';


@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public firebaseProvider: FirebaseProvider) {
    console.log(this.firebaseProvider.viagem);
  } 
  linkViagens(){
    this.firebaseProvider.viagem = 0;
    this.firebaseProvider.viagem = 1 + this.firebaseProvider.viagem;
    console.log(this.firebaseProvider.viagem);    
    this.navCtrl.push(ViagensPage); 
  }
}
