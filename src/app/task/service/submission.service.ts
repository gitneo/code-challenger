import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { ICode } from "../interface/code.interface";
import { ISubmission } from "../interface/submission.interface";
import { Code } from "../model/code.model";
import { SubmissionModel } from "../model/player-submission.model";

@Injectable({providedIn:"root"})
export class SubmissionService{

    constructor(private http: HttpClient){}

    post(submission : SubmissionModel){
        return this.http.post<ISubmission>(environment.hostUrl+'/api/v1/submission', submission)
    }

    get(){
        return this.http.get(environment.hostUrl+'/api/v1/submissions');
    }

    getById(id :number){
        return this.http.get(environment.hostUrl+id)
    }

    getChallengeResult(code :Code){
        return this.http.post<ICode>(environment.hostUrl+'/api/v1/submission/result', code)
    }

}