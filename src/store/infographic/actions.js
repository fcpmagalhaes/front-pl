export const Types = {
  LOAD_ERROR: 'infographic/LOAD_ERROR',
  LOAD_IES: 'infographic/LOAD_IES',
  LOAD_COLLEGE: 'infographic/LOAD_COLLEGE',
  LOAD_RESEARCH: 'infographic/LOAD_RESEARCH',

  SET_RANGE_YEARS: 'infographic/SET_RANGE_YEARS',
  SET_IES_NAMES: 'infographic/SET_IES_NAMES',
  SET_IES_FILTERS: 'infographic/SET_IES_FILTERS',
  SET_COLLEGE_NAMES: 'infographic/SET_COLLEGE_NAMES',
  SET_COLLEGE_FILTERS: 'infographic/SET_COLLEGE_FILTERS',
  SET_STUDENT_FILTERS: 'infographic/SET_STUDENT_FILTERS',
  SET_RESEARCH: 'infographic/SET_RESEARCH',

  UPDATE_STEP: 'infographic/UPDATE_STEP',
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
  }),
  setIesFilters: (refinedFilters) => ({
    type: Types.SET_IES_FILTERS,
    payload: refinedFilters,
  }),
  loadCollege: (rangeYears) => ({
    type: Types.LOAD_COLLEGE,
    payload: rangeYears,
  }),
  setCollegeFilters: (refinedFilters) => ({
    type: Types.SET_COLLEGE_FILTERS,
    payload: refinedFilters,
  }),
  setStudentFilters: (refinedFilters) => ({
    type: Types.SET_STUDENT_FILTERS,
    payload: refinedFilters,
  }),
  loadResearch: (filters) => ({
    type: Types.LOAD_RESEARCH,
    payload: filters,
  }),

};
