import { Component } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask  } from 'angularfire2/storage';
import * as firebase from 'firebase';
import { Observable } from 'rxjs/Observable';
import { finalize } from 'rxjs/operators';
import { map } from 'rxjs/operators/map';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-file-upload-firebase';
  ref: AngularFireStorageReference;
  task: AngularFireUploadTask;
  uploadProgress: Observable<number>;
  downloadURL: Observable<string>;

  constructor(private afStorage: AngularFireStorage) { }

  upload(event) {
    const id = Math.random().toString(36).substring(2);
    this.ref = this.afStorage.ref(id);
    this.task = this.ref.put(event.target.files[0]);
    this.uploadProgress = this.task.percentageChanges();
    //this.downloadURL =  this.ref.getDownloadURL();
    this.task.snapshotChanges().pipe(
      finalize(() => this.downloadURL = this.ref.getDownloadURL() )
    ).subscribe()



  }

}


