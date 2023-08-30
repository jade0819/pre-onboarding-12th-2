import { useState, useCallback } from 'react';
import { getIssues } from '../api/api';

function useFetch(page) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [data, setData] = useState([]);

  const sendQuery = useCallback(async () => {
    try {
      setLoading(true);
      setError(false);
      const newData = await getIssues(page);
      setData(prevData => [...prevData, ...newData]);
      setLoading(false);
    } catch (err) {
      setError(err);
    }
  }, [page]);

  return { sendQuery, loading, error, data, setData };
}

export default useFetch;
