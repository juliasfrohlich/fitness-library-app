import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AddWorkoutPage } from './add-workout.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { AddWorkoutPageRoutingModule } from './add-workout-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: AddWorkoutPage }]),
    AddWorkoutPageRoutingModule,
  ],
  declarations: [AddWorkoutPage]
})
export class AddWorkoutPageModule {}
