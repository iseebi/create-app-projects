import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory('Sample');

export const clearCounterAction = actionCreator('clearCounter');
export const addCounterAction = actionCreator<{
  value: number;
}>('addCounter');
