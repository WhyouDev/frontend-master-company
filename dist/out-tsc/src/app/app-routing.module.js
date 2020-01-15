import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HomepageComponent } from './frontend/homepage/homepage.component';
const routes = [
    {
        path: '',
        component: HomepageComponent
    },
    {
        path: 'admin',
        loadChildren: "./backend/admin/admin.module#AdminModule"
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
// export const routingComponents = [DashboardComponent]
//# sourceMappingURL=app-routing.module.js.map