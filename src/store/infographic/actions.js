export const Types = {
  // CLEAN_FORM_REPORT: 'dpr/CLEAN_FORM_REPORT',

  // LOAD_PROGRAMS: 'dpr/LOAD_PROGRAMS',

  // SAVE_REPORT: 'dpr/SAVE_REPORT',

  // LOAD_COMPLETE: 'dpr/LOAD_COMPLETE',
  // LOAD_ERROR: 'dpr/LOAD_ERROR',
  
  LOAD_IES: 'infographic/LOAD_IES',
};

// Action Creators
export const Creators = {
  // cleanReportForm: () => ({ type: Types.CLEAN_FORM_REPORT }),

  // cleanProgramsList: () => ({ type: Types.CLEAN_PROGRAMS_LIST }),

  // loadReport: (paginationParams, filterParams) => ({
  //   type: Types.LOAD,
  //   loading: true,
  //   paginationParams,
  //   filterParams,
  // }),

  // cleanErrorState: () => ({ type: Types.CLEAN_ERROR_STATE }),

  // loadProgramProjects: (reportParams) => {
  //   return {
  //     type: Types.LOAD_PROJECTS,
  //     payload: reportParams,
  //   };
  // },

  // loadPrograms: () => ({ type: Types.LOAD_PROGRAMS }),

  // loadProgram: ({ programId }) => ({
  //   type: Types.LOAD_PROGRAM,
  //   payload: { programId },
  // }),

  loadIes: (years) => ({
    type: Types.LOAD_IES,
    payload: years,
  })
};
