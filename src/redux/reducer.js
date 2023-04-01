import {
  FETCH_GREETING_REQUEST,
  FETCH_GREETING_SUCCESS,
  FETCH_GREETING_FAILURE,
} from './action';

const initialState = {
  greeting: null,
  error: null,
  isLoading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_GREETING_REQUEST:
      return {
        ...state,
        isLoading: true,
        error: null,
      };

    case FETCH_GREETING_SUCCESS:
      return {
        ...state,
        isLoading: false,
        greeting: action.payload.greeting,
      };

    case FETCH_GREETING_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
};

export default reducer;
