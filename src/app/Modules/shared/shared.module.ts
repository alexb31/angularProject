import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// import { CompanyInfo } from '../../Models/CompanyInfo';
// import { Launch } from '../../Models/launch';
// import { Launchpad } from '../../Models/launchpad';
// import { CapPart } from '../../Models/capPart';
// import { CorePart } from '../../Models/corePart';
// import { CoreOptions } from '../../Models/coreOptions';
// import { CapOptions } from '../../Models/capOptions';
// import { Capsule } from '../../Models/capsule';
// import { Rocket } from '../../Models/rocket';
// import { LaunchOptions } from '../../Models/launchOptions';

@NgModule({
  exports: [ CommonModule, MatTabsModule, MatInputModule, FormsModule, MatListModule, BrowserAnimationsModule]
 })
export class SharedModule { }
