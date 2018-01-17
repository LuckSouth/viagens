import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


import { StorageProvider } from '../../../providers/storage/storage'


@IonicPage()
@Component({
  selector: 'page-relatorios',
  templateUrl: 'relatorios.html',
})
export class RelatoriosPage {

  storages;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public storageProvider: StorageProvider
  ) {
  }

  ionViewDidEnter() {
    this.storages = this.storageProvider.listar();
  }

  // adicionar(){
  //   if(this.storage.despesa != "" && this.storage.valor != ""){
  //   this.storageProvider.adicionar(this.storage);  
  //   this.storage = {despesa:'',data:'',valor:''}    
  //   }

  // }

  // // Editar o Storage
  // editar(storage: IStorage){
  //   this.storage = {despesa:storage.despesa,data:storage.data,valor:storage.valor};
  //   this.editando = true;
  //   this.storageEditando = storage;
  // }

  // // Cancelar a edição
  // cancelarEditar(){
  //   this.storage = {despesa:'',data:'',valor:''};
  //   this.editando = false;
  // }

  // // Atualizar Storage
  // atualizar(){
  //   if(this.storage.despesa != "" && this.storage.valor != ""){
  //     this.storageProvider.atualizar(this.storageEditando,this.storage);  
  //     this.cancelarEditar();
  //   }  
  // }

  // // Deletar Storage
  // deletar(storage: IStorage){
  //   this.storageProvider.deletar(storage);
  // }

}
