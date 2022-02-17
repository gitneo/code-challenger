import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({providedIn:'root'})
export class LoginService{


    constructor(private http: HttpClient){}

    authenticate(player, callback){
        const headers = new HttpHeaders({authorization:'Basic '+btoa(player.username+':'+player.password)});
        this.http.get(environment.hostUrl + '/api/v1/login',{headers:headers}).subscribe(response=>{
            if(response['nickname']){
                localStorage.setItem('username',response['nickname']);
                localStorage.setItem('id',response['id']);
                localStorage.setItem('isAuthenticated','Y');
            }
            return callback && callback();
        })
    }
}