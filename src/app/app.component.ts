import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PrincipalPage } from '../pages/principal/principal/principal';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { StorageProvider } from '../providers/storage/storage';
import { DespesasPage } from '../pages/modulo-viagens/despesas/despesas/despesas';
import { LoginPage } from '../pages/login/login';
import { Storage } from '@ionic/storage';
import { InicioPage } from '../pages/inicio/inicio';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  rootPage: any = LoginPage;
  // principal: any = PrincipalPage;
  // login: any = DespesasPage;
  storages: any;
  lista: any[];
  chave: string = "storages";
  listaAuth: any[];
  

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private screenOrientation: ScreenOrientation,
    public storageProvider: StorageProvider,
    public storage: Storage
  ) {

    // this.storage.get("Auth").then((registros) => {
    //   if (registros) {
    //     this.listaAuth = registros;
    //   } else {
    //     this.listaAuth = [];
    //   };
    // });

    // console.log(this.listaAuth);

    // this.storages = this.storage.get(this.chave)

    // if(this.storages.isLoggedIn == false){
    //   this.rootPage = PrincipalPage;
    // }else{
    //   this.rootPage = LoginPage;
    // }

    platform.ready().then(() => {
      this.screenOrientation.lock(screenOrientation.ORIENTATIONS.PORTRAIT);
      statusBar.styleDefault();
      splashScreen.hide();
    });

      // this.storage.ready().then(() => {
      //   this.storage.get(this.chave).then((registros) => {
      //     console.log(this.lista);
      //     if (registros) {
      //       this.lista = registros
      //     } else {
      //       this.lista = [];
      //     }
      //   });

      // });

}

// ionViewDidLoad(){
//   console.log(this.lista);
// }


  

  // ionViewDidLoad() {
    
  //   return new Promise((resolve, reject) => {
  //     this.storages.listar();
  //   })
  //   .then(res =>  {
  //     this.storages = this.storageProvider.listar();
    
  //     if(this.storages.login == true){
  //       this.rootPage = PrincipalPage
  //     }else{
  //       this.rootPage = LoginPage
  //     }
  //     console.log(this.rootPage)
  //   });
  
  // } 
}
