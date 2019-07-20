import { TranslateModule } from '@ngx-translate/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Modules
import { RouterModule } from '@angular/router';

 // Components
import { SideNavComponent } from './side-nav/side-nav.component';

const COMPONENTS = [
  SideNavComponent,
];

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    RouterModule,
  ],
  declarations: [
    ...COMPONENTS,
  ],
  exports: [
    ...COMPONENTS,
    RouterModule,
  ],
})
export class SharedModule { }
