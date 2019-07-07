import { Component } from '@angular/core';
import { Constants } from 'src/app/modules/constants/constants.module';

@Component({
  selector: 'admin-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent {

  public constants = Constants;

  constructor() {}

}
