import { useEffect, useState } from 'react';
import { fetchIssues as getIssues } from '../../api/api';
import IssueDetail from '../../components/issue/IssueDetail';
import CardItem from '../../components/ui/CardItem';
import Card from '../../components/ui/Card';

const IssueDetailPage = () => {
  const [issue, setIssue] = useState([]);

  // TODO: 이슈 상세페이지 api로 변경해야 됨
  const fetchIssues = async () => {
    try {
      const fetchedIssues = await getIssues();
      setIssue(fetchedIssues);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchIssues();
  }, []);

  return (
    <IssueDetail>
      {issue && (
        <div>
          <Card>
            <CardItem issue={issue} />
          </Card>
        </div>
      )}
    </IssueDetail>
  );
};

export default IssueDetailPage;
