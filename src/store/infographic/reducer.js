import { Types } from './actions';

const INITIAL_STATE = {
  data: [],
  loading: false,
  success: false,
  error: false,
};

// Reducer
export default function infographic(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.CLEAN_PROGRAMS_LIST:
      return {
        ...state,
        loading: false,
        loadingProgramList: false,
        programsList: [],
        program: null,
      };

    default:
      return state;
  }
}
