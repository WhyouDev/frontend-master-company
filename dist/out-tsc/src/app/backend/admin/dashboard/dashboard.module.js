import * as tslib_1 from "tslib";
import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
// Lazy Load routing
import { DashboardRoutingModule } from "./dashboard-routing.module";
// Component
import { DashboardComponent } from "./dashboard.component";
let DashboardModule = class DashboardModule {
};
DashboardModule = tslib_1.__decorate([
    NgModule({
        imports: [
            CommonModule,
            DashboardRoutingModule
        ],
        declarations: [DashboardComponent]
    })
], DashboardModule);
export { DashboardModule };
//# sourceMappingURL=dashboard.module.js.map