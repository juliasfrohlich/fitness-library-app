import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-homepage',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss']
})
export class HomePage {

  constructor(public navCtrl: NavController) {}

  goToWorkoutsPage() {
    this.navCtrl.navigateRoot("/workouts");
  }

}
