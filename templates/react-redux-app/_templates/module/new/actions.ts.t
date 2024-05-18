---
to: src/modules/<%= h.changeCase.camelCase(name) %>/actions.ts
---
import actionCreatorFactory from 'typescript-fsa';

const actionCreator = actionCreatorFactory('<%= h.changeCase.pascalCase(name) %>');

// eslint-disable-next-line import/prefer-default-export
export const sample<%= h.changeCase.pascalCase(name) %>Action = actionCreator('Sample');
