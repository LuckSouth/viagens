import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class StorageProvider {

  login: boolean = false;

  //Dados Receitas

  receitas = {
    fornecedorOrigem: "",
    fornecedorDestino: "",
    produto: "",
    tipoPagmt: "",
    idUnidadeMedida: "",
    idUnidadeBandeja: "",
    caixa: "",
    qntFaturado: "",
    qntDescarregado: "",
    valorUnitario: ""
  }


  //Dados despesas
  despesas = {
    despesas: '',
    dataDespesas: '',
    valorDespesas: ''
  }


  //Dados arla
  arla = {
    dataArla: "",
    postoArla: "",
    tipoArla: "",
    km: "",
    litrosArla: "",
    litrosPrecoArla: "",
    selectArla: "",
  }


  //Dados abastecimento
  abastecimento = {
    tipoAbastecimento: "",
    postoAbastecimento: "",
    dataAbastecimento: "",
    tipoPagmtAbastecimento: "",
    odometro: "",
    litrosBomb1: "",
    precoBomb1: "",
    litrosBomb2: "",
    precoBomb2: "",
  }


  lista: any[];
  chave: string = "storages";

  constructor(private storage: Storage) {
  console.log("Eiii")
    this.storage.ready().then(() => {
      this.storage.get(this.chave).then((registros) => {
        if (registros) {
          this.lista = registros;
        } else {
          this.lista = [];
        }
      });

    });

  }
  //Varificação Login
  loginUser() {
    this.storage.ready().then(() => {
      this.lista.push(this.login);
      this.storage.set(this.chave, this.lista);
    });
  }

  
  //  Vai retornar a lista
  listar() {
    return this.lista;
  }

  // Adicionar o registro á lista, e persistir ela no BD através do método SET
  adicionarReceitas() {
    this.storage.ready().then(() => {
      this.lista.push(this.receitas);
      this.storage.set(this.chave, this.lista);
    });
  }
  // Adicionar Despesas
  adicionarDespesas() {
    this.storage.ready().then(() => {
      this.lista.push(this.despesas);
      this.storage.set(this.chave, this.lista);
    });
  }
  // Adicionar Arla
  adicionarArla() {
    this.storage.ready().then(() => {
      this.lista.push(this.arla);
      this.storage.set(this.chave, this.lista);
    });
  }


  adicionarAbastecimento() {
    this.storage.ready().then(() => {
      this.lista.push(this.abastecimento);
      this.storage.set(this.chave, this.lista);
    });
  }

  // 1º vai ser o "Storage" que quer atualizar -- 2º os "Dados" que vai chegar do formulário
  // Atualizar determinados registros
  atualizar(storage, dados) {
    for (let chave in this.lista) {
      if (this.lista[chave] == storage) {
        this.lista[chave] = dados;
        this.storage.set(this.chave, this.lista);
      }
    }
  }

  // Deletar Storage
  deletar(storage) {
    for (let chave in this.lista) {
      if (this.lista[chave] == storage) {
        this.lista.splice(parseInt(chave), 1);
        this.storage.set(this.chave, this.lista);
      }
    }
  }



}
