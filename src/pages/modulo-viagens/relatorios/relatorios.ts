import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FirebaseProvider } from '../../../providers/firebase/firebase';
import { AngularFireDatabase } from "angularfire2/database-deprecated";

import { StorageProvider } from '../../../providers/storage/storage'


interface IStorage{
  despesa:string;
  valor:string;
}

@IonicPage()
@Component({
  selector: 'page-relatorios',
  templateUrl: 'relatorios.html',
})
export class RelatoriosPage {

  storage:IStorage = {despesa:'',valor:''};
  storages:IStorage[];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public banco: AngularFireDatabase,
    public firebaseProvider: FirebaseProvider,
    public storageProvider: StorageProvider
  ) {
  }

  ionViewDidEnter() {
    this.storages = this.storageProvider.listar();
  }

  adicionar(){
    if(this.storage.despesa != "" && this.storage.valor != ""){
    this.storageProvider.adicionar(this.storage);  
    this.storage = {despesa:'',valor:''}    
    }

  }

}
