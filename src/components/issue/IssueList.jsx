import { useEffect } from 'react';
import useFetchIssueData from '../../hooks/useFetchIssueData';
import useOnScreen from '../../hooks/useOnScreen';
import IssueItem from './IssueItem';
import Error from '../ui/Error';
import Loading from '../ui/Loading';
import LoadingItem from '../ui/LoadingItem';

const IssueList = () => {
  const { error, issues, page, setPage, isLoading, isLoadingLoadMore, fetchIssues } =
    useFetchIssueData();
  const { measureRef, isIntersecting, observer } = useOnScreen();

  useEffect(() => {
    fetchIssues();
  }, [page]);

  useEffect(() => {
    if (isIntersecting) {
      setPage(page => page + 1);
      observer.disconnect();
    }
  }, [isIntersecting]);

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
