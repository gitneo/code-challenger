import { HttpClient, HttpResponse } from "@angular/common/http";
import { Component, ComponentFactoryResolver } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { Code } from "./model/code.model";
import { SubmissionService } from "./service/submission.service";
import { TaskService } from "./service/task.service";

@Component({
    selector:'app-task',
    templateUrl:'task.component.html'
})
export class TaskComponent{

    taskForm :FormGroup;
    tasks :any;
    taskDescription :string;
    playerName :string;
    answer:string;
    
     code :Code = {
        script:"",
        language:"",
        versionIndex:""
    }



    constructor(private http :HttpClient, private submissionService :SubmissionService, private taskService :TaskService){}

    ngOnInit(){
        this.taskService.get().subscribe(test => this.tasks = test);

        this.taskForm = new FormGroup({
            'task':     new FormControl(null),
            'player':   new FormGroup({"id": new FormControl(null)}),
            'solution': new FormControl(null),
            'status': new FormControl(null),
            'description':   new FormControl(null)
        });

    }

    updateTaskDescription(){
        this.taskDescription =  this.taskForm.get("task").value.description;
        this.answer =  this.taskForm.get("task").value.answer;
    }


    onSave(){
        this.taskForm.get("player").get("id").setValue(localStorage.getItem("id"));
        
        this.submissionService.post(this.taskForm.value).subscribe(
            {
                next: response => {
                    console.log(response);
                },
                error: error => {
                    console.error('There was an error!', error.message);
                }
            }
        );
    }


    onRun(){
       this.submissionService.getChallengeResult(this.code).subscribe(
           response=>{
               //COMPLETE THIS
                if(response['statusCode'] == 200 && response['output'] == this.answer){
                    this.taskForm.get("status").setValue(true);
                }else{
                    this.taskForm.get("status").setValue(false); 
                }
       });
    }
}