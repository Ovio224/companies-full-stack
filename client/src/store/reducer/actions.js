export const setUser = (dispatch, user) => {
  dispatch({ type: 'SET_USER', payload: user });
};

export const setCompany = (dispatch, company) => {
  dispatch({ type: 'SET_COMPANY', payload: company });
};

export const setProposals = (dispatch, proposals) => {
  dispatch({ type: 'SET_PROPOSALS', payload: proposals });
};

export const setJobs = (dispatch, jobs) => {
  dispatch({ type: 'SET_JOBS', payload: jobs });
};
