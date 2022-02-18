import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { Player } from "./model/player.model";
import { LoginService } from "./service/login.service";

@Component({
    selector:"app-login",
    templateUrl:"login.component.html"
})
export class LoginComponent{

    player : Player = {
        username:'',
        password:''
    };
    
    isAuthenticated :string;
    status:string;



    
    constructor(private loginService: LoginService, private router: Router){
        localStorage.removeItem('username');
        localStorage.removeItem("id")
        localStorage.setItem('isAuthenticated','N');
    }




    login(){
        this.loginService.authenticate(this.player).subscribe(
            {
                next: player => {
                    localStorage.setItem('username',player['nickname']);
                    localStorage.setItem('id',player['id']);
                    localStorage.setItem('isAuthenticated','Y');
                    this.navigate();
                },
                error: error => {
                    this.loginStatus();
                    console.error('There was an error!', error.message);
                }
            }
        );

    }




    navigate(){
        this.router.navigateByUrl('/app/task');
    }



    loginStatus(){
        if( localStorage.getItem('isAuthenticated') == 'N'){
            this.status = 'Username or Password is incorrect'
        }
    }


}