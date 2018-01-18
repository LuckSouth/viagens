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

  rootPage: any = InicioPage;
  storages: any;
  listaAuth: any[];
  

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private screenOrientation: ScreenOrientation,
    public storageProvider: StorageProvider,
    public storage: Storage
  ) {

  
    platform.ready().then(() => {
      this.screenOrientation.lock(screenOrientation.ORIENTATIONS.PORTRAIT);
      statusBar.styleDefault();
      splashScreen.hide();
    });

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
