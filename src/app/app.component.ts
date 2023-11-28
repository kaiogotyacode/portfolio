import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Portfolio';
  dropMenu : boolean = false;

  dropdownMenu(){
    this.dropMenu = !this.dropMenu;
  }

  menuSandwich(){    
    return {
      'menu-disabled' : !this.dropMenu,
      'menu-active' : this.dropMenu
    }
  }
}
