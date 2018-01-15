import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class DadosProvider {

  constructor(public http: HttpClient) {
    console.log('Hello DadosProvider Provider');
  }

  private baseURI: string = "http://earhbstfdjygt.tk/";
  public hideForm: boolean = false;

  createEntry(name: string, description: string): void {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
      options: any = { "key": "create", "name": name, "description": description },
      url: any = this.baseURI + "manage-data.php";

    this.http.post(url, JSON.stringify(options), headers)
      .subscribe((data: any) => {
        console.log(data)
        // If the request was successful notify the user
        this.hideForm = true;
      },
      (error: any) => {
        console.log("erro no createEntry")
      });
  }

  despesa(motorista: string, despesa: string, data: string, valor: string): void {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
      options: any = { "key": "despesa", "despesa": despesa, "motorista": motorista, "data": data, "valor": valor },
      url: any = this.baseURI + "manage-data.php";

    this.http.post(url, JSON.stringify(options), headers)
      .subscribe((data: any) => {
        console.log(data)
        // If the request was successful notify the user
        console.log(data)
        this.hideForm = true;
      },
      (error: any) => {
        console.log(error)
      });
  }

  abastecimento(
    motorista: string,
    tipoPosto: string,
    posto: string,
    data: string,
    tipoPagamento: string,
    odometro: string,
    litrosBomba1: string,
    precoBomba1: string,
    litrosBomba2: string,
    precoBomba2: string

  ): void {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
      options: any = {
        "key": "abastecimento",
        "motorista": motorista,
        "tipoPosto": tipoPosto,
        "data": data,
        "tipoPagamento": tipoPagamento,
        "odometro": odometro,
        "litrosBomba1": litrosBomba1,
        "precoBomba1": precoBomba1,
        "litrosBomba2": litrosBomba2,
        "precoBomba2": precoBomba2
      },
      url: any = this.baseURI + "manage-data.php";

    this.http.post(url, JSON.stringify(options), headers)
      .subscribe((data: any) => {
        console.log(data)
        // If the request was successful notify the user
        console.log(data)
        this.hideForm = true;
      },
      (error: any) => {
        console.log(error)
      });
  }

  arla(
    motorista: string,
    tipoPosto: string,
    posto: string,
    data: string,
    formaPagamento: string,
    km: string,
    litros: string,
    preco: string,

  ): void {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
      options: any = {
        "key": "arla",
        "motorista": motorista,
        "tipoPosto": tipoPosto,
        "data": data,
        "formaPagamento": formaPagamento,
        "km": km,
        "litros": litros,
        "preco": preco
      
      },
      url: any = this.baseURI + "manage-data.php";

    this.http.post(url, JSON.stringify(options), headers)
      .subscribe((data: any) => {
        console.log(data)
        // If the request was successful notify the user
        console.log(data)
        this.hideForm = true;
      },
      (error: any) => {
        console.log(error)
      });
  }




  receitas(
    motorista: string,
    fornecedorOrigem: string,
    fornecedorDestino: string,
    produto: string,
    tipoPagmt: string,
    idUnidadeMedida: string,
    qntFaturado: string,
    qntDescarregado: string,
    valorUnitario:string,
    idSubUnidade: string,
  ): void {
    let headers: any = new HttpHeaders({ 'Content-Type': 'application/json' }),
      options: any = {
        "key": "receitas",
        "motorista": motorista,
        "fornecedorOrigem": fornecedorOrigem,
        "fornecedorDestino": fornecedorDestino,
        "produto": produto,
        "tipoPagmt": tipoPagmt,
        "qntFaturado": qntFaturado,
        "qntDescarregado": qntDescarregado,
        "valorUnitario": valorUnitario,
        "idSubUnidade": idSubUnidade,
        "idUnidadeMedida": idUnidadeMedida
      },
      url: any = this.baseURI + "manage-data.php";

    this.http.post(url, JSON.stringify(options), headers)
      .subscribe((data: any) => {
        console.log(data)
        // If the request was successful notify the user
        console.log(data)
        this.hideForm = true;
      },
      (error: any) => {
        console.log(error)
      });
  }




}
