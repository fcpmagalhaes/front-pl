export const Types = {
  LOAD_IES: 'infographic/LOAD_IES',
  UPDATE_STEP: 'infographic/UPDATE_STEP',
  SET_RANGE_YEARS: 'infographic/SET_RANGE_YEARS',
  SET_IES_NAMES: 'infographic/SET_IES_NAMES',
};

// Action Creators
export const Creators = {
  updateStep: (step) => ({
    type: Types.UPDATE_STEP,
    payload: step,
  }),
  setRangeYears: (range) => ({
    type: Types.SET_RANGE_YEARS,
    payload: range,
  }),
  loadIes: (rangeYears) => ({
    type: Types.LOAD_IES,
    payload: rangeYears,
  })
};
