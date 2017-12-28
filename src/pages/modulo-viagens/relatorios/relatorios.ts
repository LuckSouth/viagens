import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { FirebaseProvider } from '../../../providers/firebase/firebase';
import { FirebaseListObservable, AngularFireDatabase } from "angularfire2/database-deprecated";


@IonicPage()
@Component({
  selector: 'page-relatorios',
  templateUrl: 'relatorios.html',
})
export class RelatoriosPage {


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public banco: AngularFireDatabase,
    public firebaseProvider: FirebaseProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RelatoriosPage');
  }



}
