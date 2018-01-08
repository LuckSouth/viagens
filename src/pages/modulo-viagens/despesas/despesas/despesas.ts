import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { FirebaseProvider } from '../../../../providers/firebase/firebase';
import { StorageProvider } from '../../../../providers/storage/storage';
import { RelatoriosPage } from '../../relatorios/relatorios';

interface IStorage {
  despesa: string;
  data: string;
  valor: string;
}

@IonicPage()
@Component({
  selector: 'page-despesas',
  templateUrl: 'despesas.html',
})
export class DespesasPage {

  despesa="";

  storage: IStorage = { despesa: '', data: '', valor: '' };
  storages: IStorage[];
  editando: boolean = false;
  storageEditando: IStorage;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public firebaseProvider: FirebaseProvider,
    public storageProvider: StorageProvider) {

  }

  valida() {
    if (this.storageProvider.despesas.despesas == "" || this.storageProvider.despesas.dataDespesas == "" || this.storageProvider.despesas.valorDespesas == "") {
        return false
      } else {
        return true
      }
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
