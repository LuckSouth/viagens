import { Injectable } from '@angular/core';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database-deprecated';



@Injectable()
export class FirebaseProvider {

  bancoReceitas: FirebaseListObservable<FirebaseProvider[]>;
  bancoDespesas: FirebaseListObservable<FirebaseProvider[]>;
  bancoArla: FirebaseListObservable<FirebaseProvider[]>;
  bancoAbastecimento: FirebaseListObservable<FirebaseProvider[]>;

  constructor(public banco: AngularFireDatabase) {
    this.bancoReceitas = this.banco.list('receitas');
    this.bancoDespesas = this.banco.list('despesas');
    this.bancoArla = this.banco.list('Arla');
    this.bancoAbastecimento = this.banco.list('abastecimento')

  }

  //ID
  $key?: string;

  //Dados Receitas
  fornecedorOrigem: string = "";
  fornecedorDestino: string = "";
  produto: string = "";
  tipoPagmt: string = "";
  idUnidadeMedida: string = "";
  idUnidadeBandeja: string = "";
  caixa: string = "";
  qntFaturado: string = "";
  qntDescarregado: string = "";
  valorUnitario: string = "";

  //Dados despesas
  despesas: string;
  data: string;
  valor: string;

  //Dados arla

  dataArla: string = "";
  posto: string = "";
  tipo: string = "";
  km: string = "";
  litros: string = "";
  litrosPreco: string = "";
  select: string = "";

  //Dados abastecimento

  firebaseData: string = "";
  firebaseTipoPagmt: string = ""
  odometro: string = ""

  litrosBomb1:string = "";
  precoBomb1:string = "";
  

  litrosBomb2:string = "";
  precoBomb2:string = "";
  
  adicionarArla() {

    this.bancoArla.push({

      dataArla: this.dataArla,
      posto: this.posto,
      tipo: this.tipo,
      km: this.km,
      litros: this.litros,
      litrosPreco: this.litrosPreco,
      select: this.select

    });

    this.dataArla = ""
    this.posto = ""
    this.tipo = ""
    this.km = ""
    this.litros = ""
    this.litrosPreco = ""
    this.select = ""
  }







  //Adicionar dados de receitas no BD
  adicionarReceitas() {

    this.bancoReceitas.push({

      fornecedorOrigem: this.fornecedorOrigem,
      fornecedorDestino: this.fornecedorDestino,
      produto: this.produto,
      tipoPagmt: this.tipoPagmt,
      idUnidadeMedida: this.idUnidadeMedida,
      idUnidadeBandeja: this.idUnidadeBandeja,
      caixa: this.caixa,
      qntFaturado: this.qntFaturado,
      qntDescarregado: this.qntDescarregado,
      valorUnitario: this.valorUnitario

    });

    this.fornecedorOrigem = "";
    this.fornecedorDestino = "";
    this.produto = "";
    this.tipoPagmt = "";
    this.idUnidadeMedida = "";
    this.idUnidadeBandeja = "";
    this.caixa = "";
    this.qntFaturado = "";
    this.qntDescarregado = "";
    this.valorUnitario = "";
  }


  //Adicionar dados de despesas no BD
  adicionarDespesas() {
    this.bancoDespesas.push({

      despesas: this.despesas,
      data: this.data,
      valor: this.valor

    });

    this.despesas = "";
    this.data = "";
    this.valor = "";

  }

  // Adicionar dados de abastecimento no BD
  adicionarAbastecimento() {
    this.bancoAbastecimento.push({
      tipo: this.tipo,
      posto: this.posto,
      firebaseData: this.firebaseData,
      firebaseTipoPagmt: this.firebaseTipoPagmt,

      odometro: this.odometro,

      litrosBomb1: this.litrosBomb1,
      precoBomb1: this.precoBomb1,

      litrosBomb2: this.litrosBomb2,
      precoBomb2: this.precoBomb2
    });

    this.tipo  = "";
    this.posto  = "";
    this.firebaseData = "";
    this.firebaseTipoPagmt = "";

    this.odometro = "";

    this.litrosBomb1 = "";
    this.precoBomb1 = "";

    this.litrosBomb2 = "";
    this.precoBomb2 = "";

  }





}
