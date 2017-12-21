import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { ArlaPagPage } from '../arla-pag/arla-pag';
import { ArlaPostoPage } from '../arla-posto/arla-posto';


@IonicPage()
@Component({
  selector: 'page-rotas-arla',
  templateUrl: 'rotas-arla.html',
})
export class RotasArlaPage {

  @ViewChild(Slides) slides: Slides;
  @ViewChild(ArlaPagPage) arlaPagPage: ArlaPagPage;
  @ViewChild(ArlaPostoPage) arlaPostoPage: ArlaPostoPage; 

  contador: number = 1;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController ) {
  }


  ngAfterViewInit(){
    this.slides.lockSwipes(true);
     
    if (this.contador == 1) {
      return this.arlaPagPage.valida();
    }

    if (this.contador == 2) {
      return this.arlaPostoPage.valida();
    } 
  }
  

  toBack() {
    this.slides.lockSwipes(false);
    this.contador -= 1;
    this.slides.slidePrev(400)
    if (this.contador == 0) {
      this.navCtrl.pop();
    } 
    this.slides.lockSwipes(true);
  }

  toGo() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(this.contador, 400)
    this.contador += 1;
    if (this.contador == 3) {

      let toast = this.toastCtrl.create({
        message: 'Arla32 adicionada com sucesso',
        duration: 2000
      });
      toast.present();

      this.navCtrl.pop();
    } 
    this.slides.lockSwipes(true);
  }

}
