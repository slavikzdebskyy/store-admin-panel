import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatSidenavModule } from '@angular/material/sidenav';

const MODULES = [
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
