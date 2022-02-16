import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";


@Injectable({providedIn:"root"})
export class TaskService{

    constructor(private http: HttpClient){}

    get(){
        return this.http.get(environment.hostUrl+'/api/v1/tasks');
    }

}