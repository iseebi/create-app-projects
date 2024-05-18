---
to: src/modules/<%= h.changeCase.camelCase(name) %>/types.ts
---
// Models
// ------------------------------

// Compose Function
// ------------------------------

// State
// ------------------------------

export type <%= h.changeCase.pascalCase(name) %>State = {
  // add your state properties here
};

export const Empty<%= h.changeCase.pascalCase(name) %>State: <%= h.changeCase.pascalCase(name) %>State = {
  // add your initial state properties here
};
