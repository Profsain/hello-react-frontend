import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetingRequest, fetchGreetingSuccess, fetchGreetingFailure } from '../redux/action';

const Greeting = () => {
  const dispatch = useDispatch();
  const { greeting, error, isLoading } = useSelector(state => state);

  useEffect(() => {
    dispatch(fetchGreetingRequest());

    // Make an asynchronous API call to retrieve the greeting
    fetch('https://example.com/api/greeting')
      .then(response => response.json())
      .then(data => dispatch(fetchGreetingSuccess(data.greeting)))
      .catch(error => dispatch(fetchGreetingFailure(error)));
  }, []);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return <p>{greeting}</p>;
};

export default Greeting;


// import React, { useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { fetchGreeting } from '../redux/greeting';

// const Greeting = () => {
//   const dispatch = useDispatch();
//   const greeting = useSelector((state) => state.greeting);
//   console.log(greeting)
//   useEffect(() => {
//     dispatch(fetchGreeting());
//   }, []);

//   return (
//     <div>
//       <h1>
//         Greeting:
        
//       </h1>
//     </div>
//   );
// };

// export default Greeting;