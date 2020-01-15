import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule }                from '@angular/forms';
import { HttpClientModule }                   from '@angular/common/http';

//admin component
import { AdminComponent } from './admin.component';

//lazyload
import { AdminRoutingModule } from './admin-routing.module';
import { FootersComponent } from './layout/footers/footers.component';
import { HeadersComponent } from './layout/headers/headers.component';
import { SidebarsComponent } from './layout/sidebars/sidebars.component';



@NgModule({
    imports: [
        AdminRoutingModule,
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule
      ],
      declarations: [
        SidebarsComponent,
        AdminComponent,
        FootersComponent,
        HeadersComponent
        
      ]

})
export class AdminModule{}