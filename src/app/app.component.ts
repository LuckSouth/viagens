import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PrincipalPage } from '../pages/principal/principal/principal'; 
import { ScreenOrientation } from '@ionic-native/screen-orientation';
import { FirebaseProvider } from '../providers/firebase/firebase';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = PrincipalPage;

  constructor(
            platform: Platform, 
            statusBar: StatusBar, 
            splashScreen: SplashScreen,
    private screenOrientation: ScreenOrientation,
    public fire: FirebaseProvider
    
  ) {

      platform.ready().then(() => { 
        this.screenOrientation.lock(screenOrientation.ORIENTATIONS.PORTRAIT);  
        statusBar.styleDefault();
        splashScreen.hide();

    });
  }
}