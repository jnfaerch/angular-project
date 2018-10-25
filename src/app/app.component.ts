import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent {
  title = 'Angular';
  userName = '';
  disabled = true;

  myChange(event) {
    console.log(event);
    return event.length > 0 ? this.disabled = false : this.disabled = true;
  }

  onResetUserName() {
      this.userName = '';
      this.myChange(event);
  }
}
