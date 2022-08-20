import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddWorkoutPage } from './add-workout.page';

const routes: Routes = [
  {
    path: '',
    component: AddWorkoutPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AddWorkoutPageRoutingModule {}
