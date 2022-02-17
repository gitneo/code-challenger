import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "./service/login.service";

@Component({
    selector:"app-login",
    templateUrl:"login.component.html"
})
export class LoginComponent{

    player = {username:'', password:''};

    constructor(private loginService: LoginService, private router: Router){}

    login(){
        this.loginService.authenticate(this.player,()=>{this.router.navigateByUrl('/app/task')});
        return false;
    }
}