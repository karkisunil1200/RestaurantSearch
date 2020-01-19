import React, {useState, useEffect} from 'react';
import yelp from '../api/yelp';

export default () => {
  const [results, setResults] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    searchApi('pasta');
  }, []);

  const searchApi = async searchTerm => {
    try {
      const response = await yelp.get('/search', {
        params: {
          limit: 50,
          term: searchTerm,
          location: 'birmingham'
        }
      });
      setResults(response.data.businesses);
    } catch (err) {
      setError('someting went wrong, but what is it?');
    }
  };

  return [searchApi, error, results];
};
