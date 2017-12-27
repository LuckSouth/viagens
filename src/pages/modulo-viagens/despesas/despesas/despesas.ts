import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { FirebaseProvider } from '../../../../providers/firebase/firebase';


@IonicPage()
@Component({
  selector: 'page-despesas',
  templateUrl: 'despesas.html',
})
export class DespesasPage {


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public firebaseProvider: FirebaseProvider) {

  }

  valida() {
    if (this.firebaseProvider.despesas == "" || this.firebaseProvider.dataDespesas == "" || this.firebaseProvider.valorDespesas == "") {
        return false
      } else {
        return true
      }
    }

  adicionarDados() {
    this.firebaseProvider.adicionarDespesas();

  }

  showAlert() {

    let toast = this.toastCtrl.create({
      message: 'Gastos adicionado com sucesso',
      duration: 2000
    });
    toast.present();

    this.navCtrl.pop();
  }
}
