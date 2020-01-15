import * as tslib_1 from "tslib";
import { NgModule } from "@angular/core";
//admin component
import { AdminComponent } from './admin.component';
//lazyload
import { AdminRoutingModule } from './admin-routing.module';
import { CommonModule } from '@angular/common';
let AdminModule = class AdminModule {
};
AdminModule = tslib_1.__decorate([
    NgModule({
        imports: [
            AdminComponent,
            AdminRoutingModule,
            CommonModule
        ],
        declarations: [
            AdminComponent
        ]
    })
], AdminModule);
export { AdminModule };
//# sourceMappingURL=admin.module.js.map