import { useEffect } from 'react';
import { useParams } from 'react-router';
import useFetchIssueData from '../../hooks/useFetchIssueData';
import Card from '../ui/Card';
import CardItem from '../ui/CardItem';
import Profile from '../ui/Profile';
import IssueDetailContent from './IssueDetailContent';
import Error from '../ui/Error';
import Loading from '../ui/Loading';

const IssueDetail = () => {
  const { id } = useParams();
  const { issue, isLoading, error, fetchIssueDetail } = useFetchIssueData();

  useEffect(() => {
    fetchIssueDetail(id);
  }, []);

  return (
    <>
      {error && <Error error={error} type={'detail'} />}
      {isLoading && <Loading />}
      {!error && !isLoading && issue && (
        <div className="py-8">
          <div className="flex items-center">
            <Profile avatarUrl={issue.user.avatar_url} userName={issue.user.login} />
            <Card>
              <CardItem issue={issue} />
            </Card>
          </div>
          <IssueDetailContent body={issue.body} />
        </div>
      )}
    </>
  );
};

export default IssueDetail;
