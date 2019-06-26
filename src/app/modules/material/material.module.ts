import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';

const MODULES = [
  BrowserAnimationsModule,
  MatSidenavModule,
];

@NgModule({
  imports: [
    CommonModule,
   ...MODULES,
  ],
  declarations: [],
  exports: [
    ...MODULES,
  ]
})
export class MaterialModule { }
