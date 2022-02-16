import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({providedIn:'root'})
export class LoginService{

    authenticated:boolean;

    constructor(private http: HttpClient){}

    authenticate(player, callback){

        const headers = new HttpHeaders({authorization:'Basic '+btoa(player.username+':'+player.password)});
        this.http.get(environment.hostUrl + 'api/v1/login',{headers:headers}).subscribe(response=>{
            if(response['nickname']){
                this.authenticated =true;
            }else{
                this.authenticated =false;
            }
            return callback && callback();
        })
    }
}