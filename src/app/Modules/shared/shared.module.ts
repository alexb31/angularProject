import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  imports     : [ 
    CommonModule, 
  ],
  declarations: [ ],
  exports     : [ 
    CommonModule, 
    MatTabsModule, 
    BrowserAnimationsModule, 
    MatIconModule, 
    MatToolbarModule,
    MatDividerModule,
    MatListModule,
    MatSidenavModule
  ]
 })
export class SharedModule { }
