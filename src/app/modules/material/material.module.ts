import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Material modules
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const MODULES = [
  MatSidenavModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
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
