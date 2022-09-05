import { Injectable } from '@angular/core';
import { Firestore, collectionData, docData, doc, addDoc, deleteDoc, updateDoc } from '@angular/fire/firestore';
import { collection  } from '@firebase/firestore';
import { Workouts } from '../pages/workouts/workouts';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    constructor(private firestore: Firestore){}

    getWorkouts(): Observable<Workouts[]> {
        const workoutsRef = collection(this.firestore, 'workouts');
        return collectionData(workoutsRef, {idField: 'id'}) as Observable<Workouts[]>;
    }

    getWorkoutbyId(id): Observable<Workouts> {
        const workoutsRef = doc(this.firestore, `workouts/${id}`);
        return docData(workoutsRef, {idField: 'id'}) as Observable<Workouts>;
    }

    addWorkout(workout: Workouts) {
        const workoutsRef = collection(this.firestore, 'workouts');
        return addDoc(workoutsRef, workout);
    }

    // falta o metodo adicionarexercicio
    deleteWorkout(workout: Workouts) {
        const workoutsRef = doc(this.firestore, `workouts/${workout.id}`);
        return deleteDoc(workoutsRef);
    }

    updateWorkout(workout: Workouts) {
        const workoutsRef = doc(this.firestore, `workouts/${workout.id}`);
        return updateDoc(workoutsRef, { duration: workout.duration, exercises: workout.exercises});
    }

}
