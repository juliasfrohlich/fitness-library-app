import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-updateworkoutpage',
  templateUrl: 'update-workout.page.html',
  styleUrls: ['update-workout.page.scss']
})
export class UpdateWorkoutPage {

  constructor(public navCtrl: NavController) {}

  goToWorkoutsPage() {
    this.navCtrl.navigateRoot('/workouts');
  }
}
