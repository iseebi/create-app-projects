import createSagaMiddleware from 'redux-saga';
import { all } from 'typed-redux-saga';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { createReduxHistoryContext } from 'redux-first-history';
import { createBrowserHistory } from 'history';
import { createLogger } from 'redux-logger';
import { sampleReducer, sampleSaga } from './modules/sample';

const sagaMiddleware = createSagaMiddleware();
function* rootSaga(): Generator {
  yield all([
    sampleSaga(),
    /* Add your sagas here */
  ]);
}

const { routerMiddleware, routerReducer } = createReduxHistoryContext({
  history: createBrowserHistory(),
});

const rootReducer = combineReducers({
  router: routerReducer,
  sample: sampleReducer,
  /* Add your reducers here */
});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => {
    const middleware = getDefaultMiddleware({
      thunk: false,
      immutableCheck: false,
      serializableCheck: false,
    }).concat([sagaMiddleware, routerMiddleware]);
    if (import.meta.env.MODE === 'development') {
      return middleware.concat([createLogger()]); // Add logger
    }
    return middleware;
  },
});

const sagaTask = sagaMiddleware.run(rootSaga);
sagaTask.toPromise().catch(() => {
  /* no op */
});

export type AppDispatch = typeof store.dispatch;

export default store;
