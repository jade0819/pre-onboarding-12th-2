import { useEffect } from 'react';
import useOnScreen from '../../hooks/useOnScreen';
import IssueItem from './IssueItem';
import LoadingItem from '../ui/LoadingItem';

const IssueList = ({ hasMore, isLoading, loadMore, issues }) => {
  const { measureRef, isIntersecting, observer } = useOnScreen();

  useEffect(() => {
    if (isIntersecting && hasMore) {
      loadMore();
      observer.disconnect();
    }
  }, [isIntersecting, hasMore, loadMore]);

  return (
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
      {isLoading && <LoadingItem />}
    </ul>
  );
};

export default IssueList;
