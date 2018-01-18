import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AppComponent } from "./app.component";
import { BoardComponent } from "./board/board.component";
import { LoginComponent } from "./login/login.component";

const routes:Routes = [
    {path:'login', component:LoginComponent},
    {path:'', component:BoardComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule{

}