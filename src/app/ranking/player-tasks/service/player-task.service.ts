import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";


@Injectable({providedIn:"root"})
export class PlayerTaskService{

    constructor(private http: HttpClient){}

    get(id:number){
        return this.http.get(environment.hostUrl+'/api/v1/tasks/'+id);
    }

}