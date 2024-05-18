import { SampleState } from './types';

type State = { sample: SampleState };

export const selectCounterValue = (state: State) => state.sample.counter.counter;
export const selectLastAddedValue = (state: State) => state.sample.counter.lastAddedValue;
