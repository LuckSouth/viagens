import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

import { StorageProvider } from '../../../../providers/storage/storage';
import { DadosProvider } from "../../../../providers/dados/dados";
import { ViagensPage } from "../../viagens/viagens";


@IonicPage()
@Component({
  selector: 'page-despesas',
  templateUrl: 'despesas.html',
})
export class DespesasPage {

  despesa="";
  motorista = "bino"


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public storageProvider: StorageProvider,
    public dados: DadosProvider) {

  }

  viagens() {
    this.navCtrl.push(ViagensPage);
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


  salvar(){
    this.dados.despesa(this.motorista,this.storageProvider.despesas.despesas,this.storageProvider.despesas.dataDespesas, this.storageProvider.despesas.valorDespesas);
    this.storageProvider.adicionarDespesas()
  }
}
