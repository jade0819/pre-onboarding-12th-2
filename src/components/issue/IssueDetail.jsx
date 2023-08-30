import { useEffect, useState } from 'react';
import { getIssueItem } from '../../api/api';
import Profile from '../ui/Profile';
import Card from '../ui/Card';
import CardItem from '../ui/CardItem';
import IssueDetailContent from './IssueDetailContent';
import { useLocation } from 'react-router';

const IssueDetail = () => {
  const [issue, setIssue] = useState();
  const {
    state: { id },
  } = useLocation();

  const fetchIssues = async () => {
    try {
      const issue = await getIssueItem(id);
      setIssue(issue);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchIssues();
  }, []);

  return (
    <>
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
