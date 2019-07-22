import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// Material modules
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

const MODULES = [
  MatSidenavModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatMenuModule,
  MatDividerModule,
  MatProgressSpinnerModule,
];

@NgModule({
  imports: [
    CommonModule,
    ...MODULES,
  ],
  exports: [
    ...MODULES,
  ],
})
export class MaterialModule { }
