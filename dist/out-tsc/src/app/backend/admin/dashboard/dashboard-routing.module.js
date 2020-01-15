import * as tslib_1 from "tslib";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DashboardComponent } from './dashboard.component';
const routes = [
    { path: '', component: DashboardComponent },
];
let DashboardRoutingModule = class DashboardRoutingModule {
};
DashboardRoutingModule = tslib_1.__decorate([
    NgModule({
        exports: [RouterModule],
        imports: [RouterModule.forChild(routes)]
    })
], DashboardRoutingModule);
export { DashboardRoutingModule };
//# sourceMappingURL=dashboard-routing.module.js.map