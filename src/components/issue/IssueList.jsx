import { useCallback, useEffect } from 'react';
import useFetchIssueData from '../../hooks/useFetchIssueData';
import useOnScreen from '../../hooks/useOnScreen';
import IssueItem from './IssueItem';
import Error from '../ui/Error';
import Loading from '../ui/Loading';
import LoadingItem from '../ui/LoadingItem';

const IssueList = () => {
  const { error, issues, setPage, isLoading, isLoadingLoadMore } = useFetchIssueData();
  const { measureRef, isIntersecting, observer } = useOnScreen();

  const loadMore = useCallback(() => {
    setPage(page => page + 1);
  }, []);

  useEffect(() => {
    if (isIntersecting) {
      loadMore();
      observer.disconnect();
    }
  }, [isIntersecting, loadMore]);

  return (
    <>
      {error && <Error error={error} type={'list'} />}
      {isLoading && <Loading />}
      {!isLoading && !error && (
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
