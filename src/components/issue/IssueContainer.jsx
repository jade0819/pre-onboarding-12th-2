import { useCallback, useEffect, useState } from 'react';
import IssueList from './IssueList';
import { getIssues } from '../../api/api';
import Error from '../ui/Error';

export default function IssueContainer() {
  const [issues, setIssues] = useState([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchIssues = async () => {
    try {
      const newData = await getIssues(page);

      setIssues(prevData => {
        const mergedData = [...prevData, ...newData];
        const uniqueData = mergedData.filter(
          (item, index, self) => index === self.findIndex(t => t.id === item.id),
        );
        return uniqueData;
      });

      setHasMore(newData.length > 0);
    } catch (error) {
      setError(error);
    }

    setIsLoading(false);
  };

  useEffect(() => {
    fetchIssues();
  }, [page]);

  const loadMore = useCallback(() => {
    setIsLoading(true);
    setPage(page => page + 1);
  }, []);

  return (
    <>
      {error && <Error error={error} type={'list'} />}
      {!error && issues.length > 0 && (
        <IssueList issues={issues} hasMore={hasMore} loadMore={loadMore} isLoading={isLoading} />
      )}
    </>
  );
}
