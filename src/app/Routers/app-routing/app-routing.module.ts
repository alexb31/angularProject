import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from '../../app.component';
import { CompanyInfoComponent } from '../../components/company-info/company-info.component';
import { CapsuleDataComponent } from '../../components/capsule-data/capsule-data.component';
import { DetailedCapsuleDataComponent } from '../../components/detailed-capsule-data/detailed-capsule-data.component';
import { DetailedCoreDataComponent } from '../../components/detailed-core-data/detailed-core-data.component';
import { LaunchesListComponent } from '../../components/launches-list/launches-list.component';
import { LaunchpadDataComponent } from '../../components/launchpad-data/launchpad-data.component';
import { RocketDataComponent } from '../../components/rocket-data/rocket-data.component';

const appRoutes: Routes = [
  {path: 'companyInfo', component: CompanyInfoComponent},
  {path: 'capsuleData', component: CapsuleDataComponent},
  {path: 'detailedCapsuleData', component: DetailedCapsuleDataComponent},
  {path: 'detailedCoreData', component: DetailedCoreDataComponent},
  {path: 'launches', component: LaunchesListComponent},
  {path: 'launchpadData', component: LaunchpadDataComponent},
  {path: 'rocketData', component: RocketDataComponent},
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
