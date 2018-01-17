import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class StorageProvider {

  login = {
    isLoggedIn:""
  }

  //Dados despesas
  despesas = {
    id: 1,
    despesas: "",
    dataDespesas: "",
    valorDespesas: ""
  }

  //Dados Receitas
  receitas = {
    id: 2,
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


  //Dados arla
  arla = {
    id: 3,
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
    id: 4,
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
  listaAuth: any[];
  chave: string = "storages";
  chaveAuth: string = "Auth"


  constructor(private storage: Storage) {
    this.storage.ready().then(() => {
      this.storage.get(this.chave).then((registros) => {
        if (registros) {
          this.lista = registros;
        } else {
          this.lista = [];
        }
      });

    });

    this.storage.ready().then(() => {
      this.storage.get(this.chaveAuth).then((registros) => {
        if (registros) {
          this.listaAuth = registros;
        } else {
          this.listaAuth = [];
        }
      });

    });

  }

  //  Vai retornar a lista
  listar() {
    return this.lista;
  }

  listarAuth() {
    return new Promise((resolve, reject) => {
      this.listaAuth;

    })
  }

  //Verificação Login
  loginUser() {
    this.storage.ready().then(() => {
      this.listaAuth.push(this.login);
      this.storage.set(this.chaveAuth, this.listaAuth);
    });
  }


  // Adicionar Despesas
  adicionarDespesas() {
    this.storage.ready().then(() => {
      this.lista.push(this.despesas);
      this.storage.set(this.chave, this.lista);
    });

  }

  // Adicionar o registro á lista, e persistir ela no BD através do método SET
  adicionarReceitas() {
    this.storage.ready().then(() => {
      this.lista.push(this.receitas);
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
  // atualizar(storage, dados) {
  //   for (let chave in this.lista) {
  //     if (this.lista[chave] == storage) {
  //       this.lista[chave] = dados;
  //       this.storage.set(this.chave, this.lista);
  //     }
  //   }
  // }

  // // Deletar Storage
  // deletar(storage) {
  //   for (let chave in this.lista) {
  //     if (this.lista[chave] == storage) {
  //       this.lista.splice(parseInt(chave), 1);
  //       this.storage.set(this.chave, this.lista);
  //     }
  //   }
  // }



}
