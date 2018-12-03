import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CadastroClientePage } from '../pages/cadastro-cliente/cadastro-cliente';
import { MenuPage } from '../pages/menu/menu';
import { OpcaoUsuarioPage } from '../pages/opcao-usuario/opcao-usuario';
import { CadastroEmpresaPage } from '../pages/cadastro-empresa/cadastro-empresa';
import { AuthProvider } from '../providers/auth/auth';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { AuthService } from '../providers/auth/auth-service';
import { ListaPage } from '../pages/lista/lista';

const firebaseCOnfg = {
    apiKey: "AIzaSyADvD17CuAWnNPbJ9f1JFvW3fCmnX_Hx_8",
    authDomain: "ijob-214419.firebaseapp.com",
    databaseURL: "https://ijob-214419.firebaseio.com",
    projectId: "ijob-214419",
    storageBucket: "ijob-214419.appspot.com",
    messagingSenderId: "118120058179"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CadastroClientePage,
    MenuPage,
    OpcaoUsuarioPage,
    CadastroEmpresaPage,
    ListaPage


  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseCOnfg),
    AngularFireAuthModule,

  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CadastroClientePage,
    MenuPage,
    OpcaoUsuarioPage,
    CadastroEmpresaPage,
    ListaPage
  ],

  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthProvider,
    AuthService
  ]
})
export class AppModule {}
