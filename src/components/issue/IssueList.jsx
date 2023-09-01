import { useCallback, useEffect, useState } from 'react';
import useOnScreen from '../../hooks/useOnScreen';
import IssueItem from './IssueItem';
import LoadingItem from '../ui/LoadingItem';
import { getIssues } from '../../api/api';
import Error from '../ui/Error';

const IssueList = () => {
  const [issues, setIssues] = useState([]);
  const [page, setPage] = useState(1);
  const [error, setError] = useState('');
  const [isLoadingLoadMore, setIsLoadingLoadMore] = useState(false);

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
    } catch (error) {
      setError(error);
    }

    setIsLoadingLoadMore(false);
  };

  useEffect(() => {
    fetchIssues();
  }, [page]);

  const loadMore = useCallback(() => {
    setIsLoadingLoadMore(true);
    setPage(page => page + 1);
  }, []);
  const { measureRef, isIntersecting, observer } = useOnScreen();

  useEffect(() => {
    if (isIntersecting) {
      loadMore();
      observer.disconnect();
    }
  }, [isIntersecting, loadMore]);

  return (
    <>
      {error && <Error error={error} type={'list'} />}
      {!error && (
        <ul>
          {issues.length > 0 &&
            issues?.map((issue, index) => {
              if (index === issues.length - 1) {
                return (
                  <IssueItem
                    key={issue.id + index}
                    mesureRef={measureRef}
                    issue={issue}
                    index={index}
                  />
                );
              }
              return <IssueItem key={issue.id + index} issue={issue} index={index} />;
            })}
          {isLoadingLoadMore && <LoadingItem />}
        </ul>
      )}
    </>
  );
};

export default IssueList;
