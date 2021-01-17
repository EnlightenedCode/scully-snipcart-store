import { Component } from '@angular/core';
import firebase from 'firebase/app';
import 'firebase/analytics';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'workfromhome-store';

  ngOnInit() {
    console.log('hello2');
    const firebaseConfig = {
      apiKey: 'AIzaSyBIdXwUWO4wuDb6T4s-vylHJvcwcl4X8fQ',
      authDomain: 'test-project-e4ab1.firebaseapp.com',
      projectId: 'test-project-e4ab1',
      storageBucket: 'test-project-e4ab1.appspot.com',
      messagingSenderId: '853176644709',
      appId: '1:853176644709:web:1d173a7432183671b7828c',
      measurementId: 'G-L8DRVRPP2G',
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    firebase.analytics();
    firebase.analytics().setUserId('1');
    firebase
      .analytics()
      .logEvent('event', { authentication: 'user-id-available' });
  }
}
