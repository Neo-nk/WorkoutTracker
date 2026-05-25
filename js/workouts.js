const WORKOUTS_DEFAULT = {
  pull: {
    id: 'pull',
    label: 'PULL DAY',
    subtitle: 'Back & Biceps',
    accent: 'pull',
    muscles: [
      { name: 'Lats', primary: true },
      { name: 'Rhomboids', primary: true },
      { name: 'Biceps', primary: true },
      { name: 'Rear Delts', primary: false },
      { name: 'Traps', primary: false },
      { name: 'Forearms', primary: false }
    ],
    cues: [
      'Lead every pull with your elbows, not your hands',
      'Squeeze shoulder blades together at the top of rows',
      'Keep deadlift bar close — scrape the shins',
      'Full stretch at the bottom of pulldowns for lat activation',
      'Rest 2–3 min after heavy compound sets'
    ],
    sections: [
      {
        label: 'Compound Lifts',
        exercises: [
          { id: 'pull-1', name: 'Deadlift', sets: 4, reps: '4–6', rpe: 9 },
          { id: 'pull-2', name: 'Pull-ups / Weighted Pull-ups', sets: 4, reps: '6–8', rpe: 8 },
          { id: 'pull-3', name: 'Barbell Bent-Over Row', sets: 3, reps: '6–8', rpe: 8 }
        ]
      },
      {
        label: 'Isolation & Accessories',
        exercises: [
          { id: 'pull-4', name: 'Cable Lat Pulldown', sets: 3, reps: '10–12', rpe: 7 },
          { id: 'pull-5', name: 'Seated Cable Row', sets: 3, reps: '10–12', rpe: 7 },
          { id: 'pull-6', name: 'Face Pulls', sets: 3, reps: '15–20', rpe: 6 },
          { id: 'pull-7', name: 'Dumbbell Hammer Curl', sets: 3, reps: '10–12', rpe: 6 }
        ]
      }
    ]
  },
  push: {
    id: 'push',
    label: 'PUSH DAY',
    subtitle: 'Chest, Shoulders & Triceps',
    accent: 'push',
    muscles: [
      { name: 'Chest', primary: true },
      { name: 'Front Delts', primary: true },
      { name: 'Triceps', primary: true },
      { name: 'Side Delts', primary: false },
      { name: 'Serratus', primary: false }
    ],
    cues: [
      'Bench first — chest and shoulders are freshest at the start',
      "OHP before isolation — it's still a big compound, needs full focus",
      'Retract and depress your scapula on all pressing movements',
      'Slow the eccentric on skull crushers — control the weight down',
      'Keep lateral raises strict — no swinging, lead with the elbow'
    ],
    sections: [
      {
        label: 'Compound Lifts',
        exercises: [
          { id: 'push-1', name: 'Barbell Bench Press', sets: 4, reps: '4–6', rpe: 9 },
          { id: 'push-2', name: 'Overhead Press (Barbell)', sets: 4, reps: '5–7', rpe: 8 },
          { id: 'push-3', name: 'Incline Dumbbell Press', sets: 3, reps: '8–10', rpe: 8 }
        ]
      },
      {
        label: 'Isolation & Accessories',
        exercises: [
          { id: 'push-4', name: 'Cable Chest Fly', sets: 3, reps: '12–15', rpe: 7 },
          { id: 'push-5', name: 'Dumbbell Lateral Raise', sets: 3, reps: '15–20', rpe: 6 },
          { id: 'push-6', name: 'Skull Crushers (EZ Bar)', sets: 3, reps: '10–12', rpe: 7 },
          { id: 'push-7', name: 'Cable Tricep Pushdown', sets: 3, reps: '12–15', rpe: 6 }
        ]
      }
    ]
  },
  legs: {
    id: 'legs',
    label: 'LEG DAY',
    subtitle: 'Quads, Hamstrings & Glutes',
    accent: 'legs',
    muscles: [
      { name: 'Quads', primary: true },
      { name: 'Hamstrings', primary: true },
      { name: 'Glutes', primary: true },
      { name: 'Calves', primary: false },
      { name: 'Adductors', primary: false },
      { name: 'Core', primary: false }
    ],
    cues: [
      'Squat first — heaviest and most technical, needs a fresh CNS',
      'RDL second — hinge pattern, still compound but less quad demand',
      "Drive knees out on squat — don't let them cave inward",
      'Feel the stretch in your hamstrings at the bottom of RDLs',
      "Full range on calf raises — don't bounce, pause at the bottom"
    ],
    sections: [
      {
        label: 'Compound Lifts',
        exercises: [
          { id: 'legs-1', name: 'Barbell Back Squat', sets: 4, reps: '4–6', rpe: 9 },
          { id: 'legs-2', name: 'Romanian Deadlift', sets: 4, reps: '6–8', rpe: 8 },
          { id: 'legs-3', name: 'Bulgarian Split Squat', sets: 3, reps: '8–10 each leg', rpe: 8 }
        ]
      },
      {
        label: 'Isolation & Accessories',
        exercises: [
          { id: 'legs-4', name: 'Leg Press', sets: 3, reps: '10–12', rpe: 7 },
          { id: 'legs-5', name: 'Leg Curl (Machine)', sets: 3, reps: '10–12', rpe: 7 },
          { id: 'legs-6', name: 'Leg Extension (Machine)', sets: 3, reps: '12–15', rpe: 6 },
          { id: 'legs-7', name: 'Standing Calf Raise', sets: 4, reps: '15–20', rpe: 6 }
        ]
      }
    ]
  },
  full: {
    id: 'full',
    label: 'FULL BODY',
    subtitle: 'All Muscle Groups',
    accent: 'full',
    muscles: [
      { name: 'Quads', primary: true },
      { name: 'Chest', primary: true },
      { name: 'Back', primary: true },
      { name: 'Shoulders', primary: true },
      { name: 'Hamstrings', primary: false },
      { name: 'Glutes', primary: false },
      { name: 'Arms', primary: false },
      { name: 'Core', primary: false }
    ],
    cues: [
      "Squat first — it's the most demanding, needs freshest CNS",
      'Bench and RDL alternate push/pull to keep rest efficient',
      'Brace your core on every compound — treat it like a belt',
      'Full body days = moderate weight, perfect form, no ego',
      'Rest 90 sec between accessories, 2–3 min after big lifts'
    ],
    sections: [
      {
        label: 'Big Compounds First',
        exercises: [
          { id: 'full-1', name: 'Barbell Back Squat', sets: 4, reps: '4–6', rpe: 9 },
          { id: 'full-2', name: 'Barbell Bench Press', sets: 4, reps: '5–7', rpe: 8 },
          { id: 'full-3', name: 'Barbell Romanian Deadlift', sets: 3, reps: '6–8', rpe: 8 }
        ]
      },
      {
        label: 'Secondary Compounds',
        exercises: [
          { id: 'full-4', name: 'Pull-ups or Lat Pulldown', sets: 3, reps: '6–10', rpe: 7 },
          { id: 'full-5', name: 'Dumbbell Shoulder Press', sets: 3, reps: '8–10', rpe: 7 }
        ]
      },
      {
        label: 'Accessories & Finishers',
        exercises: [
          { id: 'full-6', name: 'Leg Press', sets: 3, reps: '10–12', rpe: 7 },
          { id: 'full-7', name: 'Cable Tricep Pushdown', sets: 3, reps: '12–15', rpe: 6 },
          { id: 'full-8', name: 'Plank', sets: 3, reps: '45–60 sec hold', rpe: 6 }
        ]
      }
    ]
  }
};

const WORKOUTS_STORAGE_KEY = 'repsheet-workouts-v1';

function getWorkouts() {
  try {
    const saved = localStorage.getItem(WORKOUTS_STORAGE_KEY);
    if (!saved) return JSON.parse(JSON.stringify(WORKOUTS_DEFAULT));
    const custom = JSON.parse(saved);
    const result = JSON.parse(JSON.stringify(WORKOUTS_DEFAULT));
    for (const key of Object.keys(result)) {
      if (custom[key]) result[key] = custom[key];
    }
    return result;
  } catch (e) {
    return JSON.parse(JSON.stringify(WORKOUTS_DEFAULT));
  }
}

function getWorkout(dayId) {
  return getWorkouts()[dayId] ?? null;
}

function saveWorkoutDay(dayId, dayData) {
  try {
    const saved = localStorage.getItem(WORKOUTS_STORAGE_KEY);
    const custom = saved ? JSON.parse(saved) : {};
    custom[dayId] = dayData;
    localStorage.setItem(WORKOUTS_STORAGE_KEY, JSON.stringify(custom));
  } catch (e) {}
}

function resetWorkoutDay(dayId) {
  try {
    const saved = localStorage.getItem(WORKOUTS_STORAGE_KEY);
    if (!saved) return;
    const custom = JSON.parse(saved);
    delete custom[dayId];
    localStorage.setItem(WORKOUTS_STORAGE_KEY, JSON.stringify(custom));
  } catch (e) {}
}

function allDayIds() {
  return Object.keys(WORKOUTS_DEFAULT);
}

function totalExercises(workout) {
  return workout.sections.reduce((sum, s) => sum + s.exercises.length, 0);
}
