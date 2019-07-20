import { Injectable } from '@angular/core';

@Injectable()
export class SpinnerService {

  public isShown = false;

  public show(): void {
    this.isShown = true;
  }

  public hide(): void {
    this.isShown = false;
  }

}
