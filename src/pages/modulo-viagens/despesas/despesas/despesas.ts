import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database';

import { Despesas } from '../../models/despesas.model';


@IonicPage()
@Component({
  selector: 'page-despesas',
  templateUrl: 'despesas.html',
})
export class DespesasPage {


  despesas = {} as Despesas;
  bancoDespesas: FirebaseListObservable<Despesas[]>;
  

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public toastCtrl: ToastController, private banco: AngularFireDatabase) {

      this.bancoDespesas = this.banco.list('lista-pessoas');      
  }

  adicionarDespesas(despesas: Despesas){
    this.bancoDespesas.push({
      
      despesas: despesas.despesas,
      data: despesas.data,
      valor: despesas.valor
      
            });
    
  }

  showAlert() {
    
    let toast = this.toastCtrl.create({
      message: 'Gastos adicionado com sucesso',
      duration: 2000
    });
    toast.present();
    
    this.navCtrl.pop();
  } 
}
