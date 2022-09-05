export class Workouts {
    id: string;
    workoutname: string;
    duration: string;
    exercises: [Exercises];
}

export class Exercises {
    exercisename: string;
    repetitions: string;
    weight: string;
}
