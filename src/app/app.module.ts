import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ScreenOrientation } from '@ionic-native/screen-orientation';


import { FormsModule } from '@angular/forms';     
import { CustomFormsModule } from 'ng2-validation';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database-deprecated';
import { firebaseConfig } from "./credenciaisfirebase";

import { MyApp } from './app.component';
import { HomePage } from '../pages/modulo-viagens/home/home/home';
import { PrincipalPage } from '../pages/principal/principal/principal';
import { ViagensPage } from '../pages/modulo-viagens/viagens/viagens';
import { ReceitasFornecedorPage } from '../pages/modulo-viagens/receitas/receita-fornecedor/receita-fornecedor';
import { ReceitasQntPage } from '../pages/modulo-viagens/receitas/receitas-qnt/receitas-qnt';
import { ReceitasFotoPage } from '../pages/modulo-viagens/receitas/receitas-foto/receitas-foto';

import { GeralPage } from '../pages/modulo-viagens/geral/geral-page/geral-page';
import { GeralDadosViagemPage } from '../pages/modulo-viagens/geral/geral-dados-viagem/geral-dados-viagem';
import { GeralDadosMotoristaPage } from '../pages/modulo-viagens/geral/geral-dados-motorista/geral-dados-motorista';
import { DespesasPage } from '../pages/modulo-viagens/despesas/despesas/despesas';

import { AbastecimentoPagamentoPage } from '../pages/modulo-viagens/abastecimento/abastecimento-pagamento/abastecimento-pagamento';
import { AbastecimentoOdometroPage } from '../pages/modulo-viagens/abastecimento/abastecimento-odometro/abastecimento-odometro';
import { AbastecimentoBomba1Page } from '../pages/modulo-viagens/abastecimento/abastecimento-bomba-1/abastecimento-bomba-1';
import { AbastecimentoBomba2Page } from '../pages/modulo-viagens/abastecimento/abastecimento-bomba-2/abastecimento-bomba-2';
import { RotasAbastecimentoPage } from '../pages/modulo-viagens/abastecimento/rotas-abastecimento/rotas-abastecimento';
import { AbastecimentoFotoBomba_1Page } from '../pages/modulo-viagens/abastecimento/abastecimento-foto-bomba-1/abastecimento-foto-bomba-1';
import { AbastecimentoFotoBomba_2Page } from '../pages/modulo-viagens/abastecimento/abastecimento-foto-bomba-2/abastecimento-foto-bomba-2';
import { AbastecimentoFotoOdometroPage } from '../pages/modulo-viagens/abastecimento/abastecimento-foto-odometro/abastecimento-foto-odometro';

import { RotasArlaPage } from '../pages/modulo-viagens/arla-32/rotas-arla/rotas-arla';
import { RotasReceitasPage } from '../pages/modulo-viagens/receitas/rotas-receitas/rotas-receitas';

import { RelatoriosPage } from '../pages/modulo-viagens/relatorios/relatorios';

import { ArlaPagPage } from '../pages/modulo-viagens/arla-32/arla-pag/arla-pag';
import { ArlaPostoPage } from '../pages/modulo-viagens/arla-32/arla-posto/arla-posto';

import { Camera } from "@ionic-native/camera";
import { FotoServicoProvider } from '../providers/foto-servico/foto-servico';
import { FirebaseProvider } from '../providers/firebase/firebase';
import { IonicStorageModule } from '@ionic/storage';
import { StorageProvider } from '../providers/storage/storage'
import { DadosProvider } from '../providers/dados/dados';
import { HttpClient, HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PrincipalPage,
    ViagensPage,
    ReceitasFornecedorPage,
    ReceitasQntPage,
    ReceitasFotoPage,
    DespesasPage, 
    GeralPage,
    AbastecimentoPagamentoPage,
    AbastecimentoOdometroPage,
    AbastecimentoBomba1Page,
    AbastecimentoBomba2Page,
    RotasAbastecimentoPage, 
    RotasArlaPage,
    RotasReceitasPage,
    GeralDadosViagemPage,
    GeralDadosMotoristaPage,
    ArlaPagPage,
    ArlaPostoPage,
    AbastecimentoFotoBomba_1Page,
    AbastecimentoFotoBomba_2Page,
    AbastecimentoFotoOdometroPage,
    RelatoriosPage
    
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CustomFormsModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    IonicStorageModule.forRoot(),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PrincipalPage,
    ViagensPage,
    ReceitasFornecedorPage,
    ReceitasQntPage,    
    ReceitasFotoPage,
    DespesasPage,
    GeralPage,
    AbastecimentoPagamentoPage,
    AbastecimentoOdometroPage,
    AbastecimentoBomba1Page,
    RotasAbastecimentoPage, 
    AbastecimentoBomba2Page, 
    RotasReceitasPage, 
    RotasArlaPage,
    GeralDadosViagemPage,
    GeralDadosMotoristaPage,
    ArlaPagPage,
    ArlaPostoPage,
    AbastecimentoFotoBomba_1Page,
    AbastecimentoFotoBomba_2Page,
    AbastecimentoFotoOdometroPage,
    RelatoriosPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Camera,
    AngularFireDatabase,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    FotoServicoProvider,
    ScreenOrientation,
    FirebaseProvider,
    AngularFireDatabase,
    StorageProvider,
    DadosProvider,
    HttpClient,
  ]
})
export class AppModule {}