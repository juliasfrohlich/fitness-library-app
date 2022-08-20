import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WorkoutsPage } from './workouts.page';
import { ExploreContainerComponentModule } from '../../explore-container/explore-container.module';

import { WorkoutsPageRoutingModule } from './workouts.page-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    WorkoutsPageRoutingModule
  ],
  declarations: [WorkoutsPage]
})
export class WorkoutsPageModule {}
