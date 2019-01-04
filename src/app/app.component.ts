import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Le Chef';
  loadedFeature = 'recipe';

  ngOnInit() {
    firebase.initializeApp({
        apiKey: 'AIzaSyA3goggbdOFySiEvmKyaiI_4Y9o65_aGnY',
        authDomain: 'ng-recipe-book-faerch.firebaseapp.com'
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
