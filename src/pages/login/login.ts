import { Component } from '@angular/core';
import { IonicPage, NavParams } from 'ionic-angular';
import { PrincipalPage } from '../principal/principal/principal';
import { NavController } from 'ionic-angular/navigation/nav-controller';
import { GooglePlus } from '@ionic-native/google-plus';


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

  isLoggedIn:boolean = false;


  constructor(
    public navParams: NavParams, 
    public navCtrl: NavController, 
    private googlePlus: GooglePlus) {

}

  login() {    
    this.googlePlus.login({})
      .then(res => {
      console.log(res);
      this.name = res.name;
      this.email = res.email;
      this.familyName = res.familyName;
      this.givenName = res.givenName;
      this.userId = res.userId;
      this.imageUrl = res.imageUrl;
      this.isLoggedIn = true;
    })
    .catch(err => console.error(err))}


  logout() {
  this.googlePlus.logout()
    .then(res => {
      console.log(res);
      this.name = "";
      this.email = "";
      this.familyName = "";
      this.givenName = "";
      this.userId = "";
      this.imageUrl = "";
      this.isLoggedIn = true;
    })
    .catch(err => console.error(err));
  }
}

