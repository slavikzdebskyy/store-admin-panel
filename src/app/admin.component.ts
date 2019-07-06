import { TranslateService } from '@ngx-translate/core';
import { Component } from '@angular/core';

// Modules
import { Constants } from 'src/app/modules/constants/constants.module';

@Component({
  selector: 'admin-root',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  title = 'store-admin-panel';

  constructor(translateService: TranslateService) {

    translateService.setDefaultLang(Constants.DEAFAULT_LANGUAGE);
    translateService.use(Constants.DEAFAULT_LANGUAGE);

  }

}
