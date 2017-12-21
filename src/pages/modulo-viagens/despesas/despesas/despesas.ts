import { Component, ViewChild } from '@angular/core';
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

  ngAfterViewInit() {
    (true);

    if (this.contador == 1) {
      return this.valida();
    }
  }

  showAlert() {
    
    let toast = this.toastCtrl.create({
      message: 'Gastos adicionado com sucesso',
      duration: 2000
    });
    toast.present();
    
    this.navCtrl.pop();
  } 
<<<<<<< HEAD
=======
  invenTA: any = "R$" + this.valor;

  valida() {
    
        if (this.despesa == "" || this.data == "" || this.valor == "") {
          return false;
        } else {
          return true;
        }
    
      }

>>>>>>> 4ee962d14066efd4c758d42d578a88693db09968
}
