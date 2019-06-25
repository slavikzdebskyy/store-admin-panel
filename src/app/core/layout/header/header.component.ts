import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'admin-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  private isSideBarOpen = true;
  @Output() sideNavEmit = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  public toggleSideNav(): void {
    this.isSideBarOpen = !this.isSideBarOpen;
    this.sideNavEmit.emit(this.isSideBarOpen);
  }

}
