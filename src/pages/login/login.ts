import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { GooglePlus } from '@ionic-native/google-plus';
import { Storage } from '@ionic/storage/es2015/storage';
import { NativeStorage } from '@ionic-native/native-storage';

import { PrincipalPage } from '../principal/principal/principal';
import { StorageProvider } from '../../providers/storage/storage';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {

  name: any;
  email: any;
  familyName: any;
  givenName: any;
  userId: any;
  imageUrl: any;

  isLoggedIn: boolean = false;
  listaAuth: any = ["123"];
  chaveAuth: string = "Auth"


  constructor(
    public navParams: NavParams,
    public navCtrl: NavController,
    private googlePlus: GooglePlus,
    public storageProvider: StorageProvider,
    public storage: Storage,
    public nativeStorage: NativeStorage
  ) {
    this.storage.ready().then(() => {
      this.storage.get(this.chaveAuth).then((registros) => {
        if (registros) {
          this.listaAuth = registros;
        } else {
          this.listaAuth = ["123"];
        }
      });

    });

  }

  ngAfterViewInit() {

    return console.log(this.storageProvider.listarAuth());
  }

  doGoogleLogin() {

    this.googlePlus.login({
      'scopes': '', // optional, space-separated list of scopes, If not included or empty, defaults to `profile` and `email`.
      'webClientId': 'webClientId.apps.googleusercontent.com', // optional clientId of your Web application from Credentials settings of your project - On Android, this MUST be included to get an idToken. On iOS, it is not required.
      'offline': true
    })
      .then(function (user) {

        this.nativeStorage.setItem('user', {
          name: user.displayName,
          email: user.email,
          picture: user.imageUrl
        })
          .then(function () {
            this.navCtrl.push(PrincipalPage);
          }, function (error) {
            console.log(error);
          })
      });
  }


  logout() {
    this.googlePlus.logout()
      .then(function (response) {
        this.nativeStorage.remove('user');
        this.navCtrl.push(LoginPage);
      }, function (error) {
        console.log(error);
      })
  }
}

