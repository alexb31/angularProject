import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './Routers/app-routing/app-routing.module';
import { CompanyInfoComponent } from './components/company-info/company-info.component';
import { SharedModule } from './Modules/shared/shared.module';

import { SharedModule } from './Modules/shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    CompanyInfoComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
