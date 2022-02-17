import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { PlayerTask } from "./ranking/player-tasks/player-task.component";
import { RankingComponent } from "./ranking/ranking.component";
import { PageTemplateComponent } from "./shared/template/page-template.component";
import { TaskComponent } from "./task/task.component";

const routes :Routes = [
    {path:'',component:LoginComponent},
    {path:'app',component:PageTemplateComponent, children:[
        {path:'task',component:TaskComponent},
        {path:'ranking',component:RankingComponent,children:[
            {path:'player-tasks', component:PlayerTask}
        ]}
    ]}
   
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}