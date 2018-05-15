import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router';
import {AppComponent} from '../../app.component';
import { CompanyInfoComponent } from '../../components/company-info/company-info.component';

const appRoutes: Routes = [
  {path: '', component: AppComponent}
  {path: 'companyInfo', component: CompanyInfoComponent},
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule,
  ],
  declarations: []
})
export class AppRoutingModule { }
