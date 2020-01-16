import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './frontend/header/header.component';

import { FooterComponent } from './frontend/footer/footer.component';

import { SectionComponent } from './frontend/section/section.component';
import { HomepageComponent } from './frontend/homepage/homepage.component';
import { DynamicScriptLoaderService } from './shared/services/dynamic-script.service';
import { ApiService } from './shared/services/api.service';
import { XRequestService } from './shared/services/xrequest.service';
import { SweetalertService } from './shared/services/sweetalert.service';
import { ProductComponent } from './backend/product/product.component';
// import { AdminComponent } from './backend/admin/admin.component';
// import { DashboardComponent } from './backend/admin/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SectionComponent,
    HomepageComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    DynamicScriptLoaderService,
    ApiService,
    SweetalertService,
    XRequestService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
