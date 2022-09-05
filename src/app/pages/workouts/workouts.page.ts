import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-workouts',
  templateUrl: 'workouts.page.html',
  styleUrls: ['workouts.page.scss']
})
export class WorkoutsPage {

  constructor(public navCtrl: NavController) {}

  goToAddWorkoutPage() {
    this.navCtrl.navigateRoot('/add-workout');
  }
  goToUpdateWorkoutPage() {
    this.navCtrl.navigateRoot('/update-workout');
  }
}
