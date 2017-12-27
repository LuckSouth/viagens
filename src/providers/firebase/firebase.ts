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
    this.bancoArla = this.banco.list('arla');
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
  caixa?: string = "";
  qntFaturado: string = "";
  qntDescarregado: string = "";
  valorUnitario: string = "";


  //Dados despesas
  despesas: string = "";   
  dataDespesas: string = "";
  valorDespesas: string = "";
  

  //Dados arla
  dataArla: string = "";
  postoArla: string = "";
  tipoArla: string = "";
  km: string = "";
  litrosArla: string = "";
  litrosPrecoArla: string = "";
  selectArla: string = "";


  //Dados abastecimento
  tipoAbastecimento: string = "";
  postoAbastecimento: string = "";
  dataAbastecimento: string = "";
  tipoPagmtAbastecimento: string = "";

  
  odometro: string = ""

  litrosBomb1:string = "";
  precoBomb1:string = "";
  

  litrosBomb2:string = "";
  precoBomb2:string = "";

  
  adicionarArla() {

    this.bancoArla.push({

      dataArla: this.dataArla,
      posto: this.postoArla,
      tipo: this.tipoArla,
      km: this.km,
      litros: this.litrosArla,
      litrosPreco: this.litrosPrecoArla,
      select: this.selectArla

    });

    this.dataArla = ""
    this.postoArla = ""
    this.tipoArla = ""
    this.km = ""
    this.litrosArla = ""
    this.litrosPrecoArla = ""
    this.selectArla = ""
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
      data: this.dataDespesas,
      valor: this.valorDespesas

    });

    this.despesas = "";
    this.dataDespesas = "";
    this.valorDespesas = "";

  }

  // Adicionar dados de abastecimento no BD
  adicionarAbastecimento() {
    this.bancoAbastecimento.push({
      tipo: this.tipoAbastecimento, 
      posto: this.postoAbastecimento, 
      firebaseData: this.dataAbastecimento,
      firebaseTipoPagmt: this.tipoPagmtAbastecimento,
    
      odometro: this.odometro,  
    
      litrosBomb1: this.litrosBomb1, 
      precoBomb1: this.precoBomb1,

      litrosBomb2: this.litrosBomb2,
      precoBomb2: this.precoBomb2
    });

    this.tipoAbastecimento  = "";
    this.postoAbastecimento  = "";
    this.dataAbastecimento = "";
    this.tipoPagmtAbastecimento = "";
  
    this.odometro = "";

    this.litrosBomb1 = "";
    this.precoBomb1 = "";

    this.litrosBomb2 = "";
    this.precoBomb2 = "";

  }





}
