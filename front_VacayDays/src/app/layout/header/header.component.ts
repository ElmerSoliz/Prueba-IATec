import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  @Input() collapsed = false;
  @Input() screenWidth = 0;

  rol:string ='Admin';

  getBodyClass(): string {
    let styleClass = '';
    if(this.collapsed && this.screenWidth > 768){
      styleClass = 'body-trimmed';
    } else if(this.collapsed && this.screenWidth <= 768 && this.screenWidth > 0) {
      styleClass = `body-md-screen`;
    }
    return styleClass;
  }

}
