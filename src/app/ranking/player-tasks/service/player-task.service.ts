import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { ITask } from "../interface/task.interface";


@Injectable({providedIn:"root"})
export class PlayerTaskService{

    constructor(private http: HttpClient){}

    get(id:number){
        return this.http.get<ITaskg>(environment.hostUrl+'/api/v1/tasks/'+id);
    }

}