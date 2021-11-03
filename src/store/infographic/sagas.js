import { takeLatest, put, call } from 'redux-saga/effects';
import _ from 'lodash';
import { api } from '../../services/axios/index';
import { Types } from './actions';


async function getIesByYears(values) {
  const payload = {
    range: values,
  };

  return api.post('/ies_names', {
    data: payload,
  });
}

function standardizeKeyValue(arrayObject) {
  const renamed = [];
  arrayObject.map( item => {
    renamed.push(
      _.mapKeys( item, ( value, key ) => {
          let newKey = key;
          if( key === 'co_ies' ) {
              newKey = 'value';
          }

          if( key === 'no_ies' ) {
              newKey = 'label';
          }
          return newKey;
      })
    )
  });
  return renamed;
};

function* loadIes(values) {
  try {
    const response = yield call(getIesByYears, values.payload);
    yield put({
      type: Types.SET_IES_NAMES,
      payload: {
        iesNames: standardizeKeyValue(response.data),
      },
    });
  } catch (err) {
    yield put({ type: Types.LOAD_ERROR });
  }
}

export function* infographicSagas() {
  yield takeLatest(Types.LOAD_IES, loadIes);
}
