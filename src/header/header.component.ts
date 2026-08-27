import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: '<h1>{{ title }}</h1>',
  // templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  title = 'My Notes';
  classes = 'btn btn-primary';
  btnName = 'testBtnName'
  isRed = false;

  btnClick() {
    alert('Welcome!');
  }

  change() {
    this.isRed = !this.isRed;
  }
}
