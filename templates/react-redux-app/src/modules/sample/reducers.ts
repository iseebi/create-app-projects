import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { EmptySampleState } from './types';
import { addCounterAction, clearCounterAction } from './actions';

const reducer = reducerWithInitialState({ ...EmptySampleState });

reducer.case(clearCounterAction, (state) => ({
  ...state,
  counter: { counter: state.counter.counter },
}));

reducer.case(addCounterAction, (state, { value }) => ({
  ...state,
  counter: {
    counter: state.counter.counter + value,
    lastAddedValue: value,
  },
}));

export default reducer;
