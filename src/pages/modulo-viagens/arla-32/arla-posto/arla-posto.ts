import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular'; 

@IonicPage()
@Component({
  selector: 'arla-posto-page',
  templateUrl: 'arla-posto.html',
})
export class ArlaPostoPage {
  data: string= "" ;
  posto: string = "";
  tipo: string = "";
  km: string = "";
  
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  valida() {
    
        if (this.data == "" || this.tipo == "" || this.posto == "" || this.km == "") {
          return false;
        }else{
          return true;
        }
      }
}
