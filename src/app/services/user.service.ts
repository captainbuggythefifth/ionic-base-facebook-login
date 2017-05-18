import { Injectable } from '@angular/core';
import { FacebookAuth, User } from '@ionic/cloud-angular';
import { EnvironmentService } from '../services/environment.service';

@Injectable()
export class UserService {
    
    sFullName: string;
    sProfilePicture: string;
    sEmail: string;

    constructor(private environmentService: EnvironmentService, private facebook: FacebookAuth, private user: User) {
        if(environmentService.isLive() == false){
            this.setDummyUser();
        }
    }

    getUser(){
        return {
            sFullName : this.sFullName,
            sProfilePicture : this.sProfilePicture,
            sEmail : this.sEmail
        }
    }

    setUser(){
        this.sFullName = this.user.social.facebook.data.full_name;
        this.sProfilePicture = this.user.social.facebook.data.profile_picture;
        this.sEmail = this.user.social.facebook.data.email;    
    }

    setDummyUser(){
        this.sFullName = "JR Teves";
        this.sEmail = "captainbuggythefifth@gmail.com";
        this.sProfilePicture = "https://scontent.fmnl10-1.fna.fbcdn.net/v/t1.0-1/p160x160/1937156_10206864744250477_5559134031423174693_n.jpg?oh=785512e28c16dd57e8075cff917d39e0&oe=5975131B";
    }
}