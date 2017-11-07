import { Component } from '@angular/core';
import { Platform,AlertController} from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Sqlite } from "../providers/sqlite";
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(public platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,sqlite:Sqlite,public alertCtrl: AlertController ) {

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      sqlite.openDb();

});

}
}