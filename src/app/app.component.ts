import { Component } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gestionDeLivre';

  constructor(){
    var firebaseConfig = {
      apiKey: "AIzaSyAwZr6KheyRq0Bd64rc5PEqo-qCVUXlLtY",
      authDomain: "gestdelivrefirebase.firebaseapp.com",
      databaseURL: "https://gestdelivrefirebase.firebaseio.com",
      projectId: "gestdelivrefirebase",
      storageBucket: "gestdelivrefirebase.appspot.com",
      messagingSenderId: "119634913592",
      appId: "1:119634913592:web:5a4847f05b3a538ce879cd",
      measurementId: "G-S40QE5W3S6"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
  }
}
