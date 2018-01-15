import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PrincipalPage } from '../pages/principal/principal/principal';
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { StorageProvider } from '../providers/storage/storage';
import { DespesasPage } from '../pages/modulo-viagens/despesas/despesas/despesas';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  // rootPage: any = PrincipalPage;
  page1: any = PrincipalPage;
  page2: any = DespesasPage;
  storages;
  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    private screenOrientation: ScreenOrientation,
    public storageProvider: StorageProvider
  ) {

    this.storages = this.storageProvider.listar();

    platform.ready().then(() => {
      this.screenOrientation.lock(screenOrientation.ORIENTATIONS.PORTRAIT);
      statusBar.styleDefault();
      splashScreen.hide();

    });
  }
}