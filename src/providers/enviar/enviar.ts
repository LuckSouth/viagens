import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
// import { Network } from "@ionic-native/network";
import { AlertController } from "ionic-angular";
import { StorageProvider } from "../../providers/storage/storage";
import { DadosProvider } from "../dados/dados";
@Injectable()
export class EnviarProvider {

  despesas = []
  abastecimento = []
  arla = []
  receitas = []

  constructor(public storageProvider: StorageProvider,
    public dados: DadosProvider,
    public alertCtrl: AlertController) {
  }

  enviar() {
    if (this.storageProvider.tamanhoDespesas() > 0) {

      this.despesas = this.storageProvider.listaDespesas

      for (var index = 0; index <= this.storageProvider.tamanhoDespesas(); index++) {
        console.log('enviar arquivos no cache');
        this.despesas = this.storageProvider.listaDespesas

        this.dados.despesa(
          this.despesas[index].motorista,
          this.despesas[index].despesas,
          this.despesas[index].dataDespesas,
          this.despesas[index].valorDespesas,
          true

        )
       

      }
    }



    //Abastecimento

    if (this.storageProvider.tamanhoAbastecimento() > 0) {

      this.abastecimento = this.storageProvider.listaAbastecimento

      for (var index = 0; index <= this.storageProvider.tamanhoAbastecimento(); index++) {
        console.log('enviar arquivos no cache');
        this.abastecimento = this.storageProvider.listaAbastecimento

        this.dados.abastecimento(
          this.abastecimento[index].motorista,
          this.abastecimento[index].tipoPosto,
          this.abastecimento[index].posto,
          this.abastecimento[index].data,
          this.abastecimento[index].tipoPagamento,
          this.abastecimento[index].odometro,
          this.abastecimento[index].valorLitrosBomba1,
          this.abastecimento[index].valorPrecoBomba1,
          this.abastecimento[index].valorLitrosBomba2,
          this.abastecimento[index].valorLitrosBomba2,
          true


        )

      }


    }

    //Arla

    if (this.storageProvider.tamanhoArla() > 0) {

      this.arla = this.storageProvider.listaArla

      for (var index = 0; index <= this.storageProvider.tamanhoArla(); index++) {
        this.abastecimento = this.storageProvider.listaArla
        this.dados.arla(
          this.arla[index].motorista,
          this.arla[index].tipoPosto,
          this.arla[index].posto,
          this.arla[index].data,
          this.arla[index].formaPagamento,
          this.arla[index].km,
          this.arla[index].litros,
          this.arla[index].preco,
          true


        )

      }


    }



    //Receitas

    if (this.storageProvider.tamanhoReceitas() > 0) {

      this.arla = this.storageProvider.listaArla

      for (var index = 0; index <= this.storageProvider.tamanhoReceitas(); index++) {
        this.receitas = this.storageProvider.listaReceitas
        this.dados.receitas(
          this.arla[index].motorista,
          this.arla[index].fornecedorOrigem,
          this.arla[index].fornecedorDestino,
          this.arla[index].produto,
          this.arla[index].tipoPagment,
          this.arla[index].idUnidadeMedida,
          this.arla[index].qntFaturado,
          this.arla[index].qntDescarregado,
          this.arla[index].valorUnitario,
          this.arla[index].idSubUnidade,
          true


        )

      }
        console.log(this.storageProvider.tamanhoReceitas)

    }



  }


}
