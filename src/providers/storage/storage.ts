import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class StorageProvider {
  title: any;

  //Dados Receitas

  receitas = {
    title: "Receitas",
    fornecedorOrigem: "",
    fornecedorDestino: "",
    produto: "",
    tipoPagmt: "",
    idUnidadeMedida: "",
    idUnidadeBandeja: "",
    caixa: "",
    qntFaturado: "",
    qntDescarregado: "",
    valorUnitario: "",
    idSubUnidade: ""
  }


  //Dados despesas
  despesas = {
    title: 'Despesas',
    despesas: '',
    dataDespesas: '',
    valorDespesas: ''
  }


  //Dados arla
  arla = {
    title: 'Arla',
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
  chaveAbastecimento: string = "abastecimento";
  chaveArla: string = "arla";
  chaveDespesas: string = "despesas";
  chaveReceitas: string = "receitas";
  
  
  constructor(private storage: Storage) {
    this.storage.ready().then(() => {
      this.storage.get(this.chaveAbastecimento).then((registros) => {
        if (registros) {
          this.lista = registros;
        } else {
          this.lista = [];
        }
      });

    });

  }

  //  Vai retornar a lista
  listar() {
    return this.lista;
  }
 


  recuperaTamanho() {
    this.storage.length().then(result => {
      console.log(result)
      return result      
    });
    
  }

  // Adicionar o registro á lista, e persistir ela no BD através do método SET
  adicionarReceitas() {
    this.storage.ready().then(() => {
      this.lista.push(this.receitas, this.title);
      this.storage.set(this.chaveReceitas, this.lista);
    });
  }
  // Adicionar Despesas
  adicionarDespesas() {
    this.title = "Despesas";
    this.storage.ready().then(() => {
      this.lista.push(this.despesas);
      this.storage.set(this.chaveDespesas, this.lista);
    });
  }
  // Adicionar Arla
  adicionarArla() {
    this.storage.ready().then(() => {
      this.lista.push(this.arla);
      this.storage.set(this.chaveArla, this.lista);
    });
  }


  adicionarAbastecimento() {
    this.storage.ready().then(() => {
      this.lista.push(this.abastecimento);
      this.storage.set(this.chaveAbastecimento, this.lista);
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
  }


}
