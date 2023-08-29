import { fetchIssues as getIssues } from './api/api';

const App = () => {
  const fetchIssues = async () => {
    try {
      const fetchedIssues = await getIssues();
      console.log(fetchedIssues);
    } catch (error) {
      console.error(error.message);
    }
  };

  fetchIssues();

  return <div className="text-red-500">기본 세팅 완료</div>;
};

export default App;
