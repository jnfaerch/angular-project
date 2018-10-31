import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Le Chef';
  oddNumbers: number[] = [];
  evenNumbers: number[] = [];

    onMyTimerFired(eventNumber: number) {
        if (eventNumber % 2 === 0) {
            this.evenNumbers.push(eventNumber);
        } else {
            this.oddNumbers.push(eventNumber);
        }
    }
}
