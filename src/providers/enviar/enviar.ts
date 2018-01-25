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

  constructor(public storage: StorageProvider,
    public dados: DadosProvider,
    public alertCtrl: AlertController) {
  }

  enviar() {
    if (this.storage.tamanhoDespesas() > 0) {

      this.despesas = this.storage.listaDespesas

      for (var index = 0; index <= this.storage.tamanhoDespesas(); index++) {
        console.log('enviar arquivos no cache');
        this.despesas = this.storage.listaDespesas

        this.dados.despesa(
          this.despesas[index].motorista,
          this.despesas[index].despesas,
          this.despesas[index].dataDespesas,
          this.despesas[index].valorDespesas,
          true

        )
        if (index == this.storage.tamanhoDespesas()) {
          this.storage.delete(this.storage.chaveDespesas);
        }

      }
    }



    //Abastecimento

    if (this.storage.tamanhoAbastecimento() > 0) {

      this.abastecimento = this.storage.listaAbastecimento

      for (var index = 0; index <= this.storage.tamanhoAbastecimento(); index++) {
        console.log('enviar arquivos no cache');
        this.abastecimento = this.storage.listaAbastecimento

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
        if (index == this.storage.tamanhoAbastecimento()) {
          this.storage.delete(this.storage.chaveAbastecimento);
        }

      }


    }

    //Arla

    if (this.storage.tamanhoArla() > 0) {

      this.arla = this.storage.listaArla

      for (var index = 0; index <= this.storage.tamanhoArla(); index++) {
        this.abastecimento = this.storage.listaArla
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
        if (index == this.storage.tamanhoAbastecimento()) {
          this.storage.delete(this.storage.chaveArla);

        }

      }


    }



    //Receitas

    if (this.storage.tamanhoReceitas() > 0) {

      this.arla = this.storage.listaArla

      for (var index = 0; index <= this.storage.tamanhoReceitas(); index++) {
        this.receitas = this.storage.listaReceitas
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
        if (index == this.storage.tamanhoReceitas()) {
          this.storage.delete(this.storage.chaveReceitas);
        }

      }
        console.log(this.storage.tamanhoReceitas)

    }



  }


}
