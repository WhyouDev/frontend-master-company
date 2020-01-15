import * as tslib_1 from "tslib";
import { NgModule } from "@angular/core";
import { RouterModule } from '@angular/router';
//package admin
import { AdminComponent } from './admin.component';
const routes = [
    {
        path: '',
        component: AdminComponent,
        children: [
            { path: '', redirectTo: 'dashboard' },
            { path: '', loadChildren: './dashboard/dashboard.module#DashboardModule' }
        ]
    }
];
let AdminRoutingModule = class AdminRoutingModule {
};
AdminRoutingModule = tslib_1.__decorate([
    NgModule({
        exports: [RouterModule],
        imports: [RouterModule.forChild(routes)]
    })
], AdminRoutingModule);
export { AdminRoutingModule };
//# sourceMappingURL=admin-routing.module.js.map