import { takeLatest, put, call } from 'redux-saga/effects';
import _ from 'lodash';
import { api } from '../../services/axios/index';
import { Types } from './actions';


async function getResearchResult(values) {
  return api.post('/research', {
    data: values,
  });
}

async function getIesByYears(values) {
  const payload = {
    range: values,
  };

  return api.post('/ies_names', {
    data: payload,
  });
}

async function getCollegeByYears(values) {
  const payload = {
    range: values,
  };

  return api.post('/college_names', {
    data: payload,
  });
}

function standardizeKeyValue(arrayObject, code, name) {
  const renamed = [];
  arrayObject.map( item => {
    renamed.push(
      _.mapKeys( item, ( value, key ) => {
          let newKey = key;
          if( key === code ) {
              newKey = 'value';
          }

          if( key === name ) {
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
        iesNames: standardizeKeyValue(response.data, 'co_ies', 'no_ies'),
      },
    });
  } catch (err) {
    yield put({ type: Types.LOAD_ERROR });
  }
}

function* loadCollege(values) {
  try {
    const response = yield call(getCollegeByYears, values.payload);
    yield put({
      type: Types.SET_COLLEGE_NAMES,
      payload: {
        collegeNames: standardizeKeyValue(response.data, 'co_curso', 'no_curso'),
      },
    });
  } catch (err) {
    yield put({ type: Types.LOAD_ERROR });
  }
}

function* loadResearch(values) {
  try {
    const response = yield call(getResearchResult, values.payload);
    console.log('loadResearch', response);
    yield put({
      type: Types.SET_RESEARCH,
      payload: {
        researchData: response.data,
      },
    });
  } catch (err) {
    yield put({ type: Types.LOAD_ERROR });
  }
}

export function* infographicSagas() {
  yield takeLatest(Types.LOAD_IES, loadIes);
  yield takeLatest(Types.LOAD_COLLEGE, loadCollege);
  yield takeLatest(Types.LOAD_RESEARCH, loadResearch);
}
