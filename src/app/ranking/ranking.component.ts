import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { RankingService } from "./service/ranking.service";


@Component({
    selector:"app-ranking",
    templateUrl:"ranking.component.html",
    styles:[]
})
export class RankingComponent{

    ranking: any;

    constructor(private http :HttpClient, private playerRankingService :RankingService, private router :Router,private activatedRoute: ActivatedRoute){}

    ngOnInit(){
        this.playerRankingService.get().subscribe(ranking => this.ranking = ranking);
    }

    showAm(id){
        this.router.navigate(['task-done',id], {relativeTo: this.activatedRoute});
    }

}