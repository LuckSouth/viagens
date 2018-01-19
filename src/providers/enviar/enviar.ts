import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Network } from "@ionic-native/network";
import { AlertController } from "ionic-angular";

@Injectable()
export class EnviarProvider {

  constructor(public network: Network, public alertCtrl: AlertController) {
  }

  conferirConexao() {
    // if (this.network.type === 'none') {

    //   let alert = this.alertCtrl.create({
    //     title: 'Status de conexão',
    //     subTitle: 'Conexão detectada',
    //     buttons: ['OK']
    //   });
    //   alert.present();
    //   console.log("sim")

    // } else {

    //   let alert = this.alertCtrl.create({
    //     title: 'Status de conexão',
    //     subTitle: 'Nenhuma coxenão disponível',
    //     buttons: ['OK']
    //   });
    //   alert.present();
      console.log(this.network.type)
    // }

    
  }

}
