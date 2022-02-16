import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { RankingService } from "./service/ranking.service";


@Component({
    selector:"app-ranking",
    templateUrl:"ranking.component.html",
    styles:[]
})
export class RankingComponent{

    ranking: any;

    constructor(private http :HttpClient, private playerRankingService :RankingService){}

    ngOnInit(){
        this.playerRankingService.get().subscribe(ranking => this.ranking = ranking);
    }
}