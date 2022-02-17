import { Component } from "@angular/core";

@Component({
    selector:'app-page-template',
    templateUrl:"page-template.component.html"
})
export class PageTemplateComponent{

    user = localStorage.getItem('username');
}