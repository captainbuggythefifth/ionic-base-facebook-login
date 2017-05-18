import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

//Pages
import { Login } from '../pages/login/login';
//End of Pages

//Modules
import { CloudModule, CloudSettings } from '@ionic/cloud-angular';
//End of Modules


const cloudSettings: CloudSettings = {
  'core' : {
    'app_id' : '0d7f5cec'
  },
  'auth': {
    'facebook' : {
      'scope' : []
    }
  }
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    Login
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    Login
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
