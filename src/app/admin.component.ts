import { TranslateService } from '@ngx-translate/core';
import { Component } from '@angular/core';

// Modules
import { Constants } from 'src/app/modules/constants/constants.module';

@Component({
  selector: 'admin-root',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent {
  title = 'Dashboard';

  constructor(translateService: TranslateService) {

    translateService.setDefaultLang(Constants.LANGUAGES.DEAFAULT);
    translateService.use(Constants.LANGUAGES.DEAFAULT);

  }

}
