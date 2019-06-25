import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

  // modules
import { MaterialModule } from './material/material.module';
import { Constants } from './constants/constants.module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    Constants,
  ],
  declarations: [],
  exports: [MaterialModule],
})
export class SharedModule { }
