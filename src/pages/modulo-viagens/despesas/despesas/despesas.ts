import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

import { Despesas } from '../../models/despesas.model';
import { FirebaseProvider } from '../../../../providers/firebase/firebase';


@IonicPage()
@Component({
  selector: 'page-despesas',
  templateUrl: 'despesas.html',
})
export class DespesasPage {


  bancoDespesas: FirebaseListObservable<Despesas[]>;


  constructor(public navCtrl: NavController, public navParams: NavParams,
    public toastCtrl: ToastController, private banco: AngularFireDatabase,
    public firebaseProvider: FirebaseProvider) {

    this.bancoDespesas = this.banco.list('despesas');
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
