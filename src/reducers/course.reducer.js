import * as Actions from "../actions";

const initialState = {
  allCourses: null,
};

function courseReducer(state = initialState, action) {
  const data = action.payload;
  switch (action.type) {
    case Actions.GET_ALL_COURSES:
      return (state = {
        ...state,
        allCourses: data,
      });
    default:
      return state;
  }
}

export default courseReducer;
