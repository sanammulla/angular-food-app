import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyAa68Fp195qAaUrIpIBhNN76v_Sf8io0ds",
      authDomain: "ng-recipe-book-d4c09.firebaseapp.com"
    });
  }

  onNavigate (feature: string) {
    this.loadedFeature = feature;
  }
}
