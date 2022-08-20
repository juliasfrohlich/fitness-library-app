import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UpdateWorkoutPage } from './update-workout.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { UpdateWorkoutPageRoutingModule } from './update-workout-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: UpdateWorkoutPage }]),
    UpdateWorkoutPageRoutingModule,
  ],
  declarations: [UpdateWorkoutPage]
})
export class UpdateWorkoutPageModule {}
