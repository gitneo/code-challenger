import { Component } from "@angular/core";
import { ActivatedRoute, Params } from "@angular/router";
import { PlayerTaskService } from "./service/player-task.service";

@Component({
    selector:"app-task",
    templateUrl:"player-task.component.html"
})
export class PlayerTask{

    id : number;
    playerTasks : any;

    constructor(private playerTaskService : PlayerTaskService, private route : ActivatedRoute){}
    
    ngOnInit(){
        this.route.params.subscribe((params :Params) => this.id = +params['id']);

        console.log("id1 " + this.id);
        this.playerTaskService.get(this.id).subscribe(data => this.playerTasks = data);

        console.log("id2 " + this.id);

    }

}
