import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Network } from "@ionic-native/network";
import { AlertController } from "ionic-angular";
import { StorageProvider } from "../../providers/storage/storage";
import { DadosProvider } from "../dados/dados";
@Injectable()
export class EnviarProvider {

  despesas = [];

  constructor(public network: Network,
    public storage: StorageProvider,
    public dados: DadosProvider,
    public alertCtrl: AlertController) {
  }

  enviar() {
    if (this.storage.tamanhoDespesas() > 0) {

      this.despesas = this.storage.listaDespesas

      for (var index = 0; index <= this.storage.tamanhoDespesas(); index++) {
        console.log('enviar arquivos no cache');
        this.despesas = this.storage.listaDespesas
        console.log(this.despesas[index])

        this.dados.despesa(
          this.despesas[index].motorista,
          this.despesas[index].despesas,
          this.despesas[index].dataDespesas,
          this.despesas[index].valorDespesas,
          true

        )
        if(index == this.storage.tamanhoDespesas()){
          this.storage.delete("despesas")
        }

      }



      // this.storage.deletar("despesas")

    }
  }

}
