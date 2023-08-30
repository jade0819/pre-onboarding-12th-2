import { useEffect } from 'react';
import useOnScreen from '../../hook/useOnScreen';
import IssueItem from './IssueItem';

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
      {isLoading && <li>Loading...</li>}
    </ul>
  );
};

export default IssueList;
