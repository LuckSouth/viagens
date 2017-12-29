import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';


@Injectable()
export class StorageProvider {

  lista: any[];
  chave: string = "storages";

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

  }

  //  Vai retornar a lista
  listar() {
    return this.lista;
  }

  // Adicionar o registro á lista, e persistir ela no BD através do método SET
  adicionar(registro: any) {
    this.storage.ready().then(() => {
      this.lista.push(registro);
      this.storage.set(this.chave, this.lista);
    });
  }

}
