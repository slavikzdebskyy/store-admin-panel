import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  public isSideNavOpened = true;

  constructor() { }

  ngOnInit() {
  }

    public toggleSideBar(data: boolean): void {
      this.isSideNavOpened = data;
    }
}
