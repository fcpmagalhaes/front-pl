import { takeLatest, put, call } from 'redux-saga/effects';

import { api } from '../../services/axios/index';

import { Types } from './actions';


// async function apiGet(values) {
//   const page = values.paginationParams.offset;
//   const { size } = values.paginationParams;
//   const search = values.filterParams.filterByText;
//   let status = values.filterParams.filterByStatus;

//   if (status === 'all') {
//     status = null;
//   }
//   return api.get('/dpr/reports', {
//     params: {
//       page,
//       size,
//       search,
//       status,
//     },
//   });
// }

// function* loadReport(values) {
//   try {
//     const {
//       data,
//       headers: { 'all-rows-total-count': count },
//     } = yield call(apiGet, values);
//     const reportList = yield formatReportData(data);
//     yield put({
//       type: Types.LOAD_COMPLETE,
//       payload: {
//         data: reportList,
//         loading: false,
//         totalReports: parseInt(count, 10),
//       },
//     });
//   } catch (err) {
//     yield put({ type: Types.LOAD_ERROR });
//   }
// }

async function getIesByYears(values) {
  const { years } = values;
  const payload = {
    range: years,
  };

  return api.post('/ies_names', {
    data: payload,
  });
}

function* loadIes(values) {
  try {
    const response = yield call(getIesByYears, values.payload);
    console.log('Universidades', response);
  } catch (err) {
    console.log(err);
  }
}

export function* infographicSagas() {
  // yield takeLatest(Types.LOAD, loadReport);
  yield takeLatest(Types.LOAD_IES, loadIes);
}
