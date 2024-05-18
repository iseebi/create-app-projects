import { RouterState } from 'redux-first-history';
import { SampleState } from './sample';

export type RootState = {
  router: RouterState;
  sample: SampleState;
  /* Add new module states here */
};
