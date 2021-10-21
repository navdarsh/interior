import { Component, OnInit, Output , EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() public toggleSideBar = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar(){
    this.toggleSideBar.emit();
  }

}
