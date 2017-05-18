import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

//Custom
import { FacebookAuth, User } from '@ionic/cloud-angular';
import { Login } from '../login/login';
import { UserService } from '../../app/services/user.service';
import { EnvironmentService } from '../../app/services/environment.service';
//End custom

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [UserService, EnvironmentService]
})
export class HomePage {

  //sFullName: string;
  //sProfilePicture: string;
  //sEmail: string;
  aUser: any;

  constructor(private user: User, private facebook: FacebookAuth, public navCtrl: NavController, private userService: UserService) {

  }

  ionViewWillLoad(){
    //this.sFullName = this.user.social.facebook.data.full_name;
    //this.sProfilePicture = this.user.social.facebook.data.profile_picture;
    //this.sEmail = this.user.social.facebook.data.email;
    this.aUser = this.userService.getUser();
  }
  async logout(){
    await this.facebook.logout();
    this.navCtrl.setRoot(Login);
  }
}
