import { useEffect } from 'react';
import { fetchIssues as getIssues } from '../../api/api';

const IssuesPage = () => {
  const fetchIssues = async () => {
    try {
      const fetchedIssues = await getIssues();
      console.log(fetchedIssues);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    fetchIssues();
  }, []);

  return <div>이슈 페이지</div>;
};

export default IssuesPage;
