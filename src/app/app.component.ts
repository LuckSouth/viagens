import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PrincipalPage } from '../pages/principal/principal/principal';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { NativeStorage } from '@ionic-native/native-storage';
import { NavController } from 'ionic-angular/navigation/nav-controller';

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
    public storage: Storage,
    public nativeStorage: NativeStorage,
    public navCtrl: NavController
  ) {


    platform.ready().then(() => {
      this.nativeStorage.getItem('user')
        .then(function (data) {
          // user is previously logged and we have his data
          // we will let him access the app
          this.nav.push(PrincipalPage);
          this.splashscreen.hide();
        }, function (error) {
          //we don't have the user data so we will ask him to log in
          this.navCtrl.push(LoginPage);
          this.splashscreen.hide();
        });

      this.screenOrientation.lock(screenOrientation.ORIENTATIONS.PORTRAIT);
      statusBar.styleDefault();
      splashScreen.hide();
    });

  }


}
