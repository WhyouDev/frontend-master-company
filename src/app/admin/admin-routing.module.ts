import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
//package admin
import { AdminComponent } from './admin.component';

const routes: Routes = [
    {
        path: '',
        component: AdminComponent,
        children:[
        { path:'',               redirectTo:'dashboard'},
        { path:'dashboard',               loadChildren:'./dashboard/dashboard.module#DashboardModule'}

        ]
    }
]

@NgModule({
    exports:[RouterModule],
    imports:[RouterModule.forChild(routes)]
})
export class AdminRoutingModule{ }