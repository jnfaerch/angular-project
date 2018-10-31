import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
    lastNumber = 0;
    myTimer;
    @Output() myTimerFired = new EventEmitter<number>();

    outElement = document.getElementById('output');

    constructor() { }

    ngOnInit() {
    }

    onStart() {
        this.myTimer = setInterval( () => {
            this.myTimerFired.emit(this.lastNumber + 1);
            this.lastNumber++;
        }, 1000);
    }

    onPause() {
        clearInterval(this.myTimer);
    }
}
