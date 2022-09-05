/* eslint-disable @typescript-eslint/naming-convention */
import { Component, Input, OnInit } from '@angular/core';

import { Workouts } from '../workouts/workouts';
import { DataService } from 'src/app/services/data.service';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-addworkoutpage',
  templateUrl: 'add-workout.page.html',
  styleUrls: ['add-workout.page.scss']
})
export class AddWorkoutPage implements OnInit {
  @Input() id: string;
  workout: Workouts = null;
  constructor(public navCtrl: NavController, private dataService: DataService) {

  }

  ngOnInit() {
    this.dataService.getWorkoutbyId(this.id).subscribe(res  => {
      this.workout = res;
    });
  }
  async createWorkout(workouts: Workouts) {
    this.dataService.addWorkout(workouts);
  }

  customTrackBy(index: number, obj: any): any {
    return index;
  }

  goToWorkoutsPage() {
    this.navCtrl.navigateRoot('/workouts');
  }

}
