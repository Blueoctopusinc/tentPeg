import { Component } from '@angular/core';
import { NativeStorageOriginal } from '@ionic-native/native-storage';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private nativeStorage: NativeStorageOriginal,
    private router: Router
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.nativeStorage.getItem('facebook_user')
      .then( data => {
        this.router.navigate(['/home']);
      }, err => {
        this.router.navigate(['/login']);

      });
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
