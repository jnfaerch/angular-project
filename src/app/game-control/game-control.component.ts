import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
    counter = [0];
    myTimer: any;

    constructor() { }

    ngOnInit() {
    }

    onStart() {
        this.myTimer = setInterval( () => {
            this.counter.push(this.counter.length),
            console.log(this.counter[this.counter.length - 1]);
        }, 1000);
    }

    onStop() {
        clearInterval(this.myTimer);
        this.counter = [0];
    }
}
