import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { NativeStorage } from '@ionic-native/native-storage';

import { ViagensPage } from '../../modulo-viagens/viagens/viagens';
import { StorageProvider } from '../../../providers/storage/storage';


@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {
  
  storages
  listaAuth: any[];

  name: any;
  email: any;
  familyName: any;
  givenName: any;
  userId: any;
  imageUrl: any;


  constructor(public navCtrl: NavController,
      public navParams: NavParams,
      public storageProvider: StorageProvider,
      public storage: Storage,
      public nativeStorage: NativeStorage
    ) {

  }


   ionViewDidEnter() {
     this.nativeStorage.getItem("user").then(res => {
      this.name = res.name;
      this.email = res.email;
      this.familyName = res.familyName;
      this.givenName = res.givenName;
      this.userId = res.userId;
      this.imageUrl = res.imageUrl;
     })
  }



  linkViagens() {
    // this.storageProvider.isLoggedIn = false;
    // this.storageProvider.atualizar("Auth");
    this.navCtrl.push(ViagensPage);
  }
}
