import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class StorageProvider {
  arrayAbastecimento = [];
  arrayArla = [];
  arrayDespesas = [];
  arrayReceitas = [];

  isLoggedIn;

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
    valorUnitario: "",
    idSubUnidade: ""
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

  listaAbastecimento: any[];
  listaArla: any[];
  listaDespesas: any[];
  listaReceitas: any[];

  chaveAbastecimento: string = "abastecimento";
  chaveArla: string = "arla";
  chaveDespesas: string = "despesas";
  chaveReceitas: string = "receitas";


  constructor(private storage: Storage) {
    this.storage.ready().then(() => {
      this.storage.get(this.chaveAbastecimento).then((registros) => {
        if (registros) {
          this.listaAbastecimento = registros;
        } else {
          this.listaAbastecimento = [];
        }
      });

    });

    this.storage.ready().then(() => {
      this.storage.get(this.chaveArla).then((registros) => {
        if (registros) {
          this.listaArla = registros;
        } else {
          this.listaArla = [];
        }
      });

    });

    this.storage.ready().then(() => {
      this.storage.get(this.chaveDespesas).then((registros) => {
        if (registros) {
          this.listaDespesas = registros;
        } else {
          this.listaDespesas = [];
        }
      });

    });

    this.storage.ready().then(() => {
      this.storage.get(this.chaveReceitas).then((registros) => {
        if (registros) {
          this.listaReceitas = registros;
        } else {
          this.listaReceitas = [];
        }
      });

    });

  }


  tamanhoAbastecimento() {
    this.arrayAbastecimento = this.listar()
    return this.arrayAbastecimento.length
  }

  tamanhoArla() {
    this.arrayArla = this.listarArla()
    return this.arrayArla.length
  }
  tamanhoDespesas() {
    this.arrayDespesas = this.listarDespesa()
    return this.arrayDespesas.length
  }
  tamanhoReceitas() {
    this.arrayReceitas = this.listarReceitas()
    return this.arrayReceitas.length
  }


  //  Vai retornar a lista
  listar() {
    return this.listaAbastecimento;
  }



  listarArla() {
    return this.listaArla;
  }
  listarDespesa() {
    return this.listaDespesas;
  }
  listarReceitas() {
    return this.listaReceitas;
  }



  recuperaTamanho() {
    this.storage.length().then(result => {
      console.log(result)
      return result
    });

  }

  //Verificação Login
  // loginUser() {
  //   this.storage.ready().then(() => {
  //     this.lista.push(this.isLoggedIn);
  //     this.storage.set(this.chave, this.lista);
  //   });
  // }


  // Adicionar Despesas
  adicionarDespesas() {
    this.storage.ready().then(() => {
      this.listaDespesas.push(this.despesas);
      this.storage.set(this.chaveDespesas, this.listaDespesas);
    });

  }

  // Adicionar o registro á lista, e persistir ela no BD através do método SET
  adicionarReceitas() {
    this.storage.ready().then(() => {
      this.listaReceitas.push(this.receitas);
      this.storage.set(this.chaveReceitas, this.listaReceitas);
    });
  }
  // Adicionar Arla
  adicionarArla() {
    this.storage.ready().then(() => {
      this.listaArla.push(this.arla);
      this.storage.set(this.chaveArla, this.listaArla);
    });
  }


  adicionarAbastecimento() {
    this.storage.ready().then(() => {
      this.listaAbastecimento.push(this.abastecimento);
      this.storage.set(this.chaveAbastecimento, this.listaAbastecimento);
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
  //   for (let chave in this.listaReceitas) {
  //     if (this.listaReceitas[chave] == storage) {
  //       this.listaReceitas.splice(parseInt(chave), 1);
  //       this.storage.set(this.chaveReceitas, this.listaReceitas);
  //     }
  //   }
  // }

    delete(id){
        return this.storage.remove(id).
        then(()=> true)
    }

}
