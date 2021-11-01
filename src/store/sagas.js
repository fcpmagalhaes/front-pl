import { all, fork } from 'redux-saga/effects';
import { infographicSagas } from './infographic/sagas';

export default function* () {
  yield all([
    fork(infographicSagas),
  ]);
}
