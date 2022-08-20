import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)},
  {
    path: 'workouts',
    loadChildren: () => import('./pages/workouts/workouts.module').then(m => m.WorkoutsPageModule)
  },
  {
    path: 'add-workout',
    loadChildren: () => import('./pages/add-workout/add-workout.module').then(m => m.AddWorkoutPageModule)
  },
  {
    path: 'update-workout',
    loadChildren: () => import('./pages/update-workout/update-workout.module').then(m => m.UpdateWorkoutPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
