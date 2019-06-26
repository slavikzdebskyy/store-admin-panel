import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

 // Components
import { SideNavComponent } from './side-nav/side-nav.component';

const COMPONENTS = [
  SideNavComponent,
];

@NgModule({
  imports: [
    CommonModule,
  ],
  declarations: [
    ...COMPONENTS,
  ],
  exports: [
    ...COMPONENTS,
  ],
})
export class SharedModule { }
