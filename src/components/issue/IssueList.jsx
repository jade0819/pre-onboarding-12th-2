import { useEffect, useState } from 'react';
import { fetchIssues as getIssues } from '../../api/api';
import IssueItem from './IssueItem';

const IssueList = () => {
  const [issues, setIssues] = useState([]);

  const fetchIssues = async () => {
    try {
      const fetchedIssues = await getIssues();
      setIssues(fetchedIssues);
    } catch (error) {
      alert(error.message);
    }
  };

  useEffect(() => {
    fetchIssues();
  }, []);

  return (
    <>
      {issues?.map(issue => (
        <IssueItem key={issue.id} issue={issue} />
      ))}
    </>
  );
};

export default IssueList;
