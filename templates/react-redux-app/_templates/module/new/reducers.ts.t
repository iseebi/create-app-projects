---
to: src/modules/<%= h.changeCase.camelCase(name) %>/reducers.ts
---
import { reducerWithInitialState } from 'typescript-fsa-reducers';
import { Empty<%= h.changeCase.pascalCase(name) %>State } from './types';

const reducer = reducerWithInitialState({ ...Empty<%= h.changeCase.pascalCase(name) %>State });

// reducer.case(anyAction, (state) => ({
//   ...state,
// }));

export default reducer;
