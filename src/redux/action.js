export const FETCH_GREETING_REQUEST = 'FETCH_GREETING_REQUEST';
export const FETCH_GREETING_SUCCESS = 'FETCH_GREETING_SUCCESS';
export const FETCH_GREETING_FAILURE = 'FETCH_GREETING_FAILURE';

export const fetchGreetingRequest = () => ({
  type: FETCH_GREETING_REQUEST,
});

export const fetchGreetingSuccess = greeting => ({
  type: FETCH_GREETING_SUCCESS,
  payload: { greeting },
});

export const fetchGreetingFailure = error => ({
  type: FETCH_GREETING_FAILURE,
  payload: { error },
});
