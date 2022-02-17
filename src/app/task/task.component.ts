import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
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
    playerName :string


    constructor(private http :HttpClient, private submissionService :SubmissionService, private taskService :TaskService){}

    ngOnInit(){
        this.taskService.get().subscribe(test => this.tasks = test);

        this.taskForm = new FormGroup({
            'task':     new FormControl(null),
            'player':   new FormGroup({"id": new FormControl(null)}),
            'solution': new FormControl(null),
            'description':   new FormControl(null)
        });

    }

    updateTaskDescription(value){
        
    }

    onSave(){
        this.taskForm.get("player").get("id").setValue(localStorage.getItem("id"));
        console.log( this.taskForm.value);
          let submission = this.submissionService.post(this.taskForm.value);
          submission.subscribe(data=>{
              if(data){
                  //this.successfully('saved')
              }else{
                 // this.failed('save')
              }
          })
        }
}