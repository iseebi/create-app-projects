---
to: src/modules/<%= h.changeCase.camelCase(name) %>/index.ts
---
export * from './types';
export * from './actions';
// export * from './selectors';
export { default as <%= h.changeCase.camelCase(name) %>Reducer } from './reducers';
export { default as <%= h.changeCase.camelCase(name) %>Saga } from './saga';
