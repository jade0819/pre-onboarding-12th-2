import { useState } from 'react';
import { getIssues } from '../api/api';

const useFetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchIssues = async page => {
    try {
      const response = await getIssues(page);
      setData(response.data);
    } catch (error) {
      setError(error);
    }
  };

  const fetchIssue = async page => {
    try {
      const response = await getIssues(page);
      setData(response.data);
    } catch (error) {
      setError(error);
    }
  };

  return { data, error, fetchData };
};

export default useFetch;
