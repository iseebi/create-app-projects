---
to: src/modules/<%= h.changeCase.camelCase(name) %>/saga.ts
---
import { SagaIterator } from 'redux-saga';

export default function* watch(): SagaIterator {
  // Noop
}
