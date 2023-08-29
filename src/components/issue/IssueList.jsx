import { useEffect, useState } from 'react';
import { fetchIssues as getIssues } from '../../api/api';
import IssueItem from './IssueItem';

const IssueList = () => {
  const [issues, setIssues] = useState([]);

  const fetchIssues = async () => {
    try {
      const issueDataList = await getIssues();
      setIssues(issueDataList);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchIssues();
  }, []);

  return (
    <>
      {issues.length > 0 &&
        issues?.map((issue, index) => <IssueItem key={issue.id} issue={issue} index={index} />)}
    </>
  );
};

export default IssueList;
