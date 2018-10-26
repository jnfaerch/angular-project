import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular';
  hiddenP = false;
  hideArray = [];

    hideP() {
        this.hiddenP = !this.hiddenP;
        this.hideArray.push(this.hiddenP);
        console.log(this.hideArray);
    }

    getStyleGreen() {
        return this.hideArray.length < 5 ? true : false;
    }

    getStyleBlue() {
        return this.hideArray.length >= 5 ? true : false;
    }

}
