import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { HomePage } from '../home/home';

//Custom 
import { FacebookAuth, AuthLoginResult } from '@ionic/cloud-angular';
import { EnvironmentService } from '../../app/services/environment.service';
//End of custom
/**
 * Generated class for the Login page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
  providers: [EnvironmentService]
})
export class Login {

  loginDetails: AuthLoginResult;
  constructor(private environmentService: EnvironmentService, private facebook: FacebookAuth, public navCtrl: NavController, public navParams: NavParams) {
    if(this.environmentService.isLive() == false){
      this.navCtrl.setRoot(HomePage);
    }
    else{
      this.checkLoggedIn();
    }
  }

  ionViewDidLoad() {
      console.log('ionViewDidLoad Login');
  }

  async login(): Promise<void>{
    //this.navCtrl.setRoot(HomePage);
    try{
      const token = await this.facebook.getToken();
      if(token){
        this.navCtrl.setRoot(HomePage);
      }
      else{
        this.loginDetails = await this.facebook.login();
        if(this.loginDetails.token){
          await this.facebook.storeToken(this.loginDetails.token);
          this.navCtrl.setRoot(HomePage);
        }
      }
      //this.loginDetails = await this.facebook.login()
      //console.log(this.loginDetails);
      //console.log(this.user.social.facebook);
      //await this.facebook.storeToken(this.loginDetails.token);
      //const token = await this.facebook.getToken();
      //console.log(token);
    }
    catch(e){
      console.error(e)
    }
  }

  async checkLoggedIn(){
    const token = await this.facebook.getToken();
    if(token){
      this.navCtrl.setRoot(HomePage);
    }
  }
}
