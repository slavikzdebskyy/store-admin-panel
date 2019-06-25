import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';

const MODULES = [
  MatSidenavModule,
];

@NgModule({
  imports: [
    CommonModule,
    BrowserAnimationsModule,
   ...MODULES,
  ],
  declarations: [],
  exports: [
    ...MODULES,
  ]
})
export class MaterialModule { }
