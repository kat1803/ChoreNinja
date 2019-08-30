import { all, fork } from 'redux-saga/effects';

import  { watchDeletePost } from './homescreenSaga';


// Redux Saga: Root Saga
export function* rootSaga () {
    yield all([
      fork(watchDeletePost),
    ]);
  };