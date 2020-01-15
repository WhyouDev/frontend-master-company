import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './frontend/header/header.component';

import { FooterComponent } from './frontend/footer/footer.component';

import { SectionComponent } from './frontend/section/section.component';
import { HomepageComponent } from './frontend/homepage/homepage.component';
// import { AdminComponent } from './backend/admin/admin.component';
// import { DashboardComponent } from './backend/admin/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SectionComponent,
    HomepageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
