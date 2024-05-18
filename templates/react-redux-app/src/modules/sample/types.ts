// Models
// ------------------------------

export type SampleCounter = {
  counter: number;
  lastAddedValue?: number;
};

// Compose Function
// ------------------------------

// State
// ------------------------------

export type SampleState = {
  counter: SampleCounter;
};

export const EmptySampleState: SampleState = {
  counter: {
    counter: 0,
  },
};
