import { Injectable } from '@angular/core';

@Injectable()
export class EnvironmentService {
    
    sEnv: any;
    bLive : Boolean;

    constructor() {
        //0 = development
        //1 = stage
        //2 = production
        this.setEnv();
    }

    setEnv(){
        this.sEnv = 0;
    }

    isLive(){
        switch(this.sEnv){
            case 0:
                this.bLive = false;
                break;
            case 1:
                this.bLive = false;
                break;
            case 3:
                this.bLive = true;
                break;
        }
        return this.bLive;
    }
}