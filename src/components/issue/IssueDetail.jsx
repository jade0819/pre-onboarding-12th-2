import { useEffect, useState } from 'react';
import { getIssueItem } from '../../api/api';
import { useParams } from 'react-router';
import Profile from '../ui/Profile';
import Card from '../ui/Card';
import CardItem from '../ui/CardItem';
import IssueDetailContent from './IssueDetailContent';
import Error from '../ui/Error';

const IssueDetail = () => {
  const [issue, setIssue] = useState();
  const [error, setError] = useState('');

  const { id } = useParams();

  const fetchIssues = async () => {
    try {
      const issue = await getIssueItem(id);
      setIssue(issue);
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    fetchIssues();
  }, []);

  return (
    <>
      {error && <Error error={error} type={'detail'} />}
      {issue && (
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
