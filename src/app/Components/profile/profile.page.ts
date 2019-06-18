import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { WorkerModel } from 'src/app/Models/WorkerModel';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  worker: WorkerModel;

  constructor(private storage: Storage) {

    this.worker = new WorkerModel();

    this.storage.get('workerInfo').then((info) => {
        this.worker = info;
   });
  }

  ngOnInit() {
  }

}
