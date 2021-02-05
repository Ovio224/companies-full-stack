export const globalState = {
  user: {},
  company: {},
  proposals: [],
  jobs: []
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case 'SET_USER':
      return {
        ...state,
        user: payload
      };
    case 'SET_COMPANY':
      return {
        ...state,
        company: payload
      };
    case 'SET_PROPOSALS':
      return {
        ...state,
        proposals: payload
      };
    case 'SET_JOBS':
      return {
        ...state,
        jobs: payload
      };
    default:
      return state;
  }
};

export default reducer;
