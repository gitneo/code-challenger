import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "./service/login.service";

@Component({
    selector:"app-login",
    templateUrl:"login.component.html"
})
export class LoginComponent{

    player = {username:'', password:''};
    isAuthenticated :string;
    status:string;

    constructor(private loginService: LoginService, private router: Router){
        localStorage.removeItem('username');
        localStorage.removeItem("id")
        localStorage.setItem('isAuthenticated','N');
    }

    login(){
        this.loginService.authenticate(this.player,()=>{this.router.navigateByUrl('/app/task')});
        this.loginStatus();
        return false;
    }

    loginStatus(){
        if( localStorage.getItem('isAuthenticated') == 'N'){
            this.status = 'Username or Password is incorrect'
        }
    }
}