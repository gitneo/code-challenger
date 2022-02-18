import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { IPlayer } from "../interface/player.interface";
import { Player } from "../model/player.model";

@Injectable({providedIn:'root'})
export class LoginService{


    constructor(private http: HttpClient){}

    authenticate(player: Player){
        const headers = new HttpHeaders({authorization:'Basic '+btoa(player.username+':'+player.password)});
        return this.http.get<IPlayer>(environment.hostUrl + '/api/v1/login',{headers:headers})
    }
}