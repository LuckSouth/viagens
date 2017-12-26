import { Injectable } from '@angular/core';
import { FirebaseListObservable, AngularFireDatabase } from 'angularfire2/database';



@Injectable()
export class ReceitasProvider {

  bancoReceitas: FirebaseListObservable<ReceitasProvider[]>;
  

  constructor(public banco: AngularFireDatabase) {
    console.log('Hello ReceitasProvider Provider');
    this.bancoReceitas = this.banco.list('receitas');
    
  }

  $key?: string;
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

  adicionar(){

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



}
