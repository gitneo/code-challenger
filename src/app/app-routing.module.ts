import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { RankingComponent } from "./ranking/ranking.component";
import { TaskComponent } from "./task/task.component";

const routes :Routes = [
    {path:'',component:LoginComponent},
    {path:'task',component:TaskComponent},
    {path:'ranking',component:RankingComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}