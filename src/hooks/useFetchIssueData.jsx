import { useCallback, useEffect, useState } from 'react';
import { getIssueDetail, getIssues } from '../api/api';
import objUniqueCheck from '../utils/objUniqueCheck';

const PER_PAGE = 30;

const useFetchIssueData = () => {
  const [issues, setIssues] = useState([]);
  const [issue, setIssue] = useState(null);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingLoadMore, setIsLoadingLoadMore] = useState(false);
  const [error, setError] = useState(null);

  const fetchIssues = useCallback(async () => {
    page === 1 ? setIsLoading(true) : setIsLoadingLoadMore(true);

    try {
      const newData = await getIssues(PER_PAGE, page);
      setIssues(prevData => objUniqueCheck(prevData, newData));
    } catch (error) {
      setError(error);
    } finally {
      page === 1 ? setIsLoading(false) : setIsLoadingLoadMore(false);
    }
  }, [page]);

  const fetchIssueDetail = useCallback(
    async id => {
      setIsLoading(true);

      try {
        const newData = await getIssueDetail(id);
        setIssue(newData);
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    },
    [issue],
  );

  useEffect(() => {
    fetchIssues();
  }, [page]);

  return {
    issues,
    issue,
    page,
    setPage,
    error,
    isLoading,
    isLoadingLoadMore,
    fetchIssues,
    fetchIssueDetail,
  };
};

export default useFetchIssueData;
