export const Types = {
  LOAD_ERROR: 'infographic/LOAD_ERROR',

  LOAD_IES: 'infographic/LOAD_IES',
  LOAD_COLLEGE: 'infographic/LOAD_COLLEGE',
  LOAD_STUDENT: 'infographic/LOAD_STUDENT',
  LOAD_RESEARCH: 'infographic/LOAD_RESEARCH',

  SET_RANGE_YEARS: 'infographic/SET_RANGE_YEARS',
  
  SET_IES_NAMES: 'infographic/SET_IES_NAMES',
  SET_IES_OPTIONS: 'infographic/SET_IES_OPTIONS',
  SET_IES_FILTERS: 'infographic/SET_IES_FILTERS',
  
  SET_COLLEGE_NAMES: 'infographic/SET_COLLEGE_NAMES',
  SET_COLLEGE_OPTIONS: 'infographic/SET_COLLEGE_OPTIONS',
  SET_COLLEGE_FILTERS: 'infographic/SET_COLLEGE_FILTERS',
  
  SET_STUDENT_OPTIONS: 'infographic/SET_STUDENT_OPTIONS',
  SET_STUDENT_FILTERS: 'infographic/SET_STUDENT_FILTERS',

  SET_RESEARCH: 'infographic/SET_RESEARCH',
  SET_CHART: 'infographic/SET_CHART',
  UPDATE_STEP: 'infographic/UPDATE_STEP',
  SET_MODAL: 'infographic/SET_MODAL'
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
  loadCollege: (payload) => ({
    type: Types.LOAD_COLLEGE,
    payload: payload,
  }),
  setCollegeFilters: (refinedFilters) => ({
    type: Types.SET_COLLEGE_FILTERS,
    payload: refinedFilters,
  }),
  loadStudent: () => ({
    type: Types.LOAD_STUDENT
  }),
  setStudentFilters: (refinedFilters) => ({
    type: Types.SET_STUDENT_FILTERS,
    payload: refinedFilters,
  }),
  loadResearch: (filters) => ({
    type: Types.LOAD_RESEARCH,
    payload: filters,
  }),
  setModal: (openModal) => ({
    type: Types.SET_MODAL,
    payload: openModal,
  }),
  setChartType: (chart) => ({
    type: Types.SET_CHART,
    payload: chart,
  })
};
