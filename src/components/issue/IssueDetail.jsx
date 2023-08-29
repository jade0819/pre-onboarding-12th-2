import { useEffect, useState } from 'react';
import { fetchIssues as getIssues } from '../../api/api';
import Profile from '../ui/Profile';
import Card from '../ui/Card';
import CardItem from '../ui/CardItem';
import IssueDetailContent from './IssueDetailContent';

const IssueDetail = () => {
  const [issue, setIssue] = useState();

  // TODO: 이슈 상세페이지 api로 변경해야 됨
  const fetchIssues = async () => {
    try {
      const issueDataList = await getIssues();
      console.log(issueDataList[4]);
      setIssue(issueDataList[4]);
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
