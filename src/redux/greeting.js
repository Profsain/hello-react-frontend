const apiURL = 'http://localhost:3000/api/v1/greetings';
const GREET_EVERYONE = '/greeting/GREET_EVERYONE';

export const greetEveryone = (greeting) => ({
  type: GREET_EVERYONE,
  greeting,
});

export const fetchGreeting = () => async (dispatch) => {
  const response = await fetch(apiURL);
  const data = await response.json();
  dispatch(greetEveryone(data));
};

const greetingReducer = (state = {}, action) => {
  switch (action.type) {
    case GREET_EVERYONE:
      return action.greeting;
    default:
      return state;
  }
};

export default greetingReducer;