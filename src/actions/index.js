import axios from "axios";

export const GET_ALL_COURSES = "[Course] GET_ALL_COURSES";

export function getCourses() {
  const request = axios.get(
    "https://602ccb7930ba7200172236d5.mockapi.io/v1/courses/course",
  );

  return async (dispatch) => {
    try {
      const response = await request;

      return dispatch({
        type: GET_ALL_COURSES,
        payload: response.data,
      });
    } catch (e) {
      //
    }
  };
}
