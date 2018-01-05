import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { RelatoriosPage } from '../../relatorios/relatorios';
import { StorageProvider } from '../../../../providers/storage/storage'

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
    public storageProvider: StorageProvider) {

  }

  // Inicio Storage
  ionViewDidEnter() {
    this.storages = this.storageProvider.listar();
  }

  adicionar() {
    if (this.storage.despesa != "" && this.storage.valor != "") {
      this.storageProvider.adicionar(this.storage);
      this.storage = { despesa: '', data: '', valor: '' }
    }

  }

  // Editar o Storage
  editar(storage: IStorage) {
    this.storage = { despesa: storage.despesa, data: storage.data, valor: storage.valor };
    this.editando = true;
    this.storageEditando = storage;
  }

  // Cancelar a edição
  cancelarEditar() {
    this.storage = { despesa: '', data: '', valor: '' };
    this.editando = false;
  }

  // Atualizar Storage
  atualizar() {
    if (this.storage.despesa != "" && this.storage.valor != "") {
      this.storageProvider.atualizar(this.storageEditando, this.storage);
      this.cancelarEditar();
    }
  }

  // Deletar Storage
  deletar(storage: IStorage) {
    this.storageProvider.deletar(storage);
  }
  // Fim Storage

  valida() {
    if (this.storage.despesa == "" || this.storage.data == "" || this.storage.valor == "") {
      return false
    } else {
      return true
    }
  }

  abreStorage() {
    this.navCtrl.push(RelatoriosPage)
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
