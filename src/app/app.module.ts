import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyByTrI6i63tUSbnwlWyW10qcMF6grd5TzU',
      authDomain: 'muc-media-server.firebaseapp.com',
      databaseURL: 'https://muc-media-server-default-rtdb.firebaseio.com',
      projectId: 'muc-media-server',
      storageBucket: 'muc-media-server.appspot.com',
      messagingSenderId: '460598162202',
      appId: '1:460598162202:web:4c31baa609b00a2424b2a3',
      measurementId: 'G-1PLV11X7RX'
    }),
    AngularFireStorageModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
