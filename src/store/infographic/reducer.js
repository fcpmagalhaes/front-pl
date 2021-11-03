import { Types } from './actions';

const INITIAL_STATE = {
  dataFilters: [],
  loading: false,
  success: false,
  error: false,
  activeStep: 0,
  rangeYears: [],
  iesNames: [],
};

// Reducer
export default function infographic(state = INITIAL_STATE, action) {
  // console.log('payload', action.payload);
  console.log('state', state);
  switch (action.type) {
    case Types.UPDATE_STEP:
      return {
        ...state,
        activeStep: action.payload,
      };
    case Types.SET_RANGE_YEARS:
      return {
        ...state,
        rangeYears: action.payload,
      };
    case Types.LOAD_IES:
      return {
        ...state,
        loading: true,
        error: false
      };
    case Types.SET_IES_NAMES:
      return {
        ...state,
        loading: false,
        error: false,
        iesNames: action.payload.iesNames
      };
    case Types.LOAD_ERROR:
      return {
        ...state,
        error: true,
        loading: false,
      };

    default:
      return state;
  }
}
