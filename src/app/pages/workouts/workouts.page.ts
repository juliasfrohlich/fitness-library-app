import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';



@Component({
  selector: 'app-workouts',
  templateUrl: 'workouts.page.html',
  styleUrls: ['workouts.page.scss']
})
export class WorkoutsPage {

  workouts = [];

  constructor(public navCtrl: NavController, private dataService: DataService) {
    this.dataService.getWorkouts().subscribe(res => {
      console.log(res);
      this.workouts = res;
    });
  }

  openWorkout(workout) {
    console.log(workout);
  }

  openExercise(workout) {
    console.log(workout);
  }
  goToAddWorkoutPage() {
    this.navCtrl.navigateRoot('/add-workout');
  }
  goToUpdateWorkoutPage() {
    this.navCtrl.navigateRoot('/update-workout');
  }



}
