import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchGreetingRequest, fetchGreetingSuccess, fetchGreetingFailure } from '../redux/action';
import '../App.css';

const Greeting = () => {
  const dispatch = useDispatch();
  const { greeting, error, isLoading } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchGreetingRequest());

    // Make an asynchronous API call to retrieve the greeting
    fetch('http://localhost:3000/api/v1/random_greeting')
      .then((response) => response.json())
      .then((data) => dispatch(fetchGreetingSuccess(data.message)))
      .catch((error) => dispatch(fetchGreetingFailure(error)));
  }, [dispatch]);

  return (
    <div className="container">
      <h1>Greetings Message:</h1>
      <h2>
        {isLoading ? ' Loading...' : greeting}
      </h2>
      {error && <p>{error}</p>}
    </div>
  );
};

export default Greeting;
