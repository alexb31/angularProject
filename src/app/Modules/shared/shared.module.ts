import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  imports     : [ CommonModule, MatTabsModule, BrowserAnimationsModule ],
  declarations: [ ],
  exports     : [ CommonModule, MatTabsModule, BrowserAnimationsModule]
 })
export class SharedModule { }
